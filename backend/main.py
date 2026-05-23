from alembic import command
from alembic.config import Config
from fastapi import Depends, FastAPI, Form, Request
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session

from database import get_db
from models import Memo

app = FastAPI()
templates = Jinja2Templates(directory="templates")


@app.on_event("startup")
def run_migrations():
    alembic_cfg = Config("alembic.ini")
    command.upgrade(alembic_cfg, "head")


@app.get("/")
def index(request: Request, db: Session = Depends(get_db)):
    memos = db.query(Memo).order_by(Memo.created_at.desc()).all()
    return templates.TemplateResponse("index.html", {"request": request, "memos": memos})


@app.post("/memos")
def create_memo(content: str = Form(...), db: Session = Depends(get_db)):
    memo = Memo(content=content)
    db.add(memo)
    db.commit()
    return RedirectResponse(url="/", status_code=303)


@app.post("/memos/{memo_id}/delete")
def delete_memo(memo_id: int, db: Session = Depends(get_db)):
    memo = db.query(Memo).filter(Memo.id == memo_id).first()
    if memo:
        db.delete(memo)
        db.commit()
    return RedirectResponse(url="/", status_code=303)
