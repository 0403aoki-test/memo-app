<script lang="ts">
  import Showcase from '../Showcase.svelte'

  let display = $state('0')
  let prevValue = $state('')
  let operator = $state('')
  let waitingForOperand = $state(false)

  function inputNumber(num: string) {
    if (waitingForOperand) {
      display = num
      waitingForOperand = false
    } else {
      display = display === '0' ? num : display + num
    }
  }

  function inputOperator(op: string) {
    prevValue = display
    operator = op
    waitingForOperand = true
  }

  function inputDecimal() {
    if (waitingForOperand) {
      display = '0.'
      waitingForOperand = false
      return
    }
    if (!display.includes('.')) display += '.'
  }

  function calculate() {
    if (!operator || !prevValue) return
    const a = parseFloat(prevValue)
    const b = parseFloat(display)
    let result: number
    switch (operator) {
      case '+': result = a + b; break
      case '−': result = a - b; break
      case '×': result = a * b; break
      case '÷': result = b !== 0 ? a / b : 0; break
      default: return
    }
    display = String(parseFloat(result.toFixed(8)))
    operator = ''
    prevValue = ''
    waitingForOperand = true
  }

  function clear() {
    display = '0'
    prevValue = ''
    operator = ''
    waitingForOperand = false
  }

  function toggleSign() {
    display = String(parseFloat(display) * -1)
  }

  function percent() {
    display = String(parseFloat(display) / 100)
  }

  type ButtonDef = {
    label: string
    action: () => void
    style: string
  }

  const buttons: ButtonDef[] = [
    { label: 'AC', action: clear, style: 'bg-gray-400 hover:bg-gray-300 text-white col-span-2 text-lg' },
    { label: '±', action: toggleSign, style: 'bg-gray-400 hover:bg-gray-300 text-white text-lg' },
    { label: '÷', action: () => inputOperator('÷'), style: 'bg-orange-400 hover:bg-orange-300 text-white text-xl font-light' },
    { label: '7', action: () => inputNumber('7'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '8', action: () => inputNumber('8'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '9', action: () => inputNumber('9'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '×', action: () => inputOperator('×'), style: 'bg-orange-400 hover:bg-orange-300 text-white text-xl font-light' },
    { label: '4', action: () => inputNumber('4'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '5', action: () => inputNumber('5'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '6', action: () => inputNumber('6'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '−', action: () => inputOperator('−'), style: 'bg-orange-400 hover:bg-orange-300 text-white text-xl font-light' },
    { label: '1', action: () => inputNumber('1'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '2', action: () => inputNumber('2'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '3', action: () => inputNumber('3'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '+', action: () => inputOperator('+'), style: 'bg-orange-400 hover:bg-orange-300 text-white text-xl font-light' },
    { label: '0', action: () => inputNumber('0'), style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl col-span-2' },
    { label: '.', action: inputDecimal, style: 'bg-gray-700 hover:bg-gray-600 text-white text-xl' },
    { label: '=', action: calculate, style: 'bg-orange-400 hover:bg-orange-300 text-white text-xl' },
  ]

  const code = `<!-- iOS風電卓 — grid-cols-4 + active:scale-95 -->
<div class="bg-gray-950 rounded-3xl p-5 w-72 shadow-2xl">
  <!-- ディスプレイ -->
  <div class="text-right px-2 py-4 mb-2">
    <p class="text-gray-400 text-sm h-5">{operator ? prevValue + " " + operator : ""}</p>
    <p class="text-white text-4xl font-light truncate">{display}</p>
  </div>
  <!-- ボタングリッド: grid-cols-4 + col-span-2 for AC and 0 -->
  <div class="grid grid-cols-4 gap-2.5">
    <button class="col-span-2 bg-gray-400 rounded-full py-4 text-white font-medium
      active:scale-95 transition-transform">AC</button>
    <button class="bg-orange-400 rounded-full py-4 text-white text-xl
      active:scale-95 transition-transform">=</button>
    ...
  </div>
</div>`
</script>

<Showcase title="Daily UI #004 — Calculator" {code}>
  <div class="bg-gray-950 rounded-3xl p-5 w-72 mx-auto shadow-2xl">
    <!-- ディスプレイ -->
    <div class="text-right px-2 py-4 mb-2 overflow-hidden">
      <p class="text-gray-500 text-sm h-5 truncate">{operator ? `${prevValue} ${operator}` : '\u00A0'}</p>
      <p class="text-white text-4xl font-light truncate">{display}</p>
    </div>

    <!-- ボタングリッド -->
    <div class="grid grid-cols-4 gap-2.5">
      {#each buttons as btn}
        <button
          onclick={btn.action}
          class="rounded-full py-4 font-medium active:scale-90 transition-transform duration-75 select-none {btn.style}"
        >
          {btn.label}
        </button>
      {/each}
    </div>
  </div>
</Showcase>
