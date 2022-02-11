

const buttons = ({newResult, clear, clearEntry, evaluate}) => {
  const numClick = (num) => {

  }
  return (
    <>
    <div className="num">
                <button name="(" onClick={() => newResult("(")}>(</button>
                <button name="CE" onClick={clearEntry}>CE</button>
                <button name=")" onClick={() => newResult(")")}>)</button>
                <button name="C" onClick={clear}>C</button><br/>


                <button name="1" onClick={() => newResult("1")}>1</button>
                <button name="2" onClick={() => newResult("2")}>2</button>
                <button name="3" onClick={() => newResult("3")}>3</button>
                <button name="+" onClick={() => newResult("+")}>+</button><br/>


                <button name="4" onClick={() => newResult("4")}>4</button>
                <button name="5" onClick={() => newResult("5")}>5</button>
                <button name="6" onClick={() => newResult("6")}>6</button>
                <button name="-" onClick={() => newResult("-")}>-</button><br/>

                <button name="7" onClick={() => newResult("7")}>7</button>
                <button name="8" onClick={() => newResult("8")}>8</button>
                <button name="9" onClick={() => newResult("9")}>9</button>
                <button name="*" onClick={() => newResult("*")}>x</button><br/>


                <button name="." onClick={() => newResult(".")}>.</button>
                <button name="0" onClick={() => newResult("0")}>0</button>
                <button name="=" onClick={evaluate}>=</button>
                <button name="/" onClick={() => newResult("/")}>÷</button><br/>
    </div>
    </>
  )
}

export default buttons