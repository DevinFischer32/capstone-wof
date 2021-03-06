import React from "react";

export default function Keyboard(props) {
  const { guessValue, click, setClick } = props;

  return (
    <>
      <div>
        <button
          className={click.A ? "keys vowel keysBtn" : "displayNone"}
          value="A"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, A: false });
            guessValue(e);
          }}
        >
          A
        </button>
        <button
          className={click.B ? "keys keysBtn" : "displayNone"}
          value="B"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, B: false });
            guessValue(e);
          }}
        >
          B
        </button>
        <button
          className={click.C ? "keys keysBtn" : "displayNone"}
          value="C"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, C: false });
            guessValue(e);
          }}
        >
          C
        </button>
        <button
          className={click.D ? "keys keysBtn" : "displayNone"}
          value="D"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, D: false });
            guessValue(e);
          }}
        >
          D
        </button>
        <button
          className={click.E ? "keys vowel keysBtn" : "displayNone"}
          value="E"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, E: false });
            guessValue(e);
          }}
        >
          E
        </button>
        <button
          className={click.F ? "keys keysBtn" : "displayNone"}
          value="F"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, F: false });
            guessValue(e);
          }}
        >
          F
        </button>
        <button
          className={click.G ? "keys keysBtn" : "displayNone"}
          value="G"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, G: false });
            guessValue(e);
          }}
        >
          G
        </button>
        <button
          className={click.H ? "keys keysBtn" : "displayNone"}
          value="H"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, H: false });
            guessValue(e);
          }}
        >
          H
        </button>
        <button
          className={click.I ? "keys vowel keysBtn" : "displayNone"}
          value="I"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, I: false });
            guessValue(e);
          }}
        >
          I
        </button>
        <button
          className={click.J ? "keys keysBtn" : "displayNone"}
          value="J"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, J: false });
            guessValue(e);
          }}
        >
          J
        </button>
      </div>
      <div className="keyboard">
        <button
          className={click.K ? "keys keysBtn" : "displayNone"}
          value="K"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, K: false });
            guessValue(e);
          }}
        >
          K
        </button>
        <button
          className={click.L ? "keys keysBtn" : "displayNone"}
          value="L"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, L: false });
            guessValue(e);
          }}
        >
          L
        </button>
        <button
          className={click.M ? "keys keysBtn" : "displayNone"}
          value="M"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, M: false });
            guessValue(e);
          }}
        >
          M
        </button>
        <button
          className={click.N ? "keys keysBtn" : "displayNone"}
          value="N"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, N: false });
            guessValue(e);
          }}
        >
          N
        </button>
        <button
          className={click.O ? "keys vowel keysBtn" : "displayNone"}
          value="O"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, O: false });
            guessValue(e);
          }}
        >
          o
        </button>
        <button
          className={click.P ? "keys keysBtn" : "displayNone"}
          value="P"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, P: false });
            guessValue(e);
          }}
        >
          P
        </button>
        <button
          className={click.Q ? "keys keysBtn" : "displayNone"}
          value="Q"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, Q: false });

            guessValue(e);
          }}
        >
          Q
        </button>
        <button
          className={click.R ? "keys keysBtn" : "displayNone"}
          value="R"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, R: false });

            guessValue(e);
          }}
        >
          R
        </button>
        <button
          className={click.S ? "keys keysBtn" : "displayNone"}
          value="S"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, S: false });

            guessValue(e);
          }}
        >
          S
        </button>
      </div>
      <div className="keyboard" id="lastKeyboard">
        <button
          className={click.T ? "keys keysBtn" : "displayNone"}
          value="T"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, T: false });
            guessValue(e);
          }}
        >
          T
        </button>
        <button
          className={click.U ? " vowel keysBtn" : "displayNone"}
          value="U"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, U: false });
            guessValue(e);
          }}
        >
          U
        </button>
        <button
          className={click.V ? "keys keysBtn" : "displayNone"}
          value="V"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, V: false });
            guessValue(e);
          }}
        >
          V
        </button>
        <button
          className={click.W ? "keys keysBtn" : "displayNone"}
          value="W"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, W: false });
            guessValue(e);
          }}
        >
          W
        </button>
        <button
          className={click.X ? "keys keysBtn" : "displayNone"}
          value="X"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, X: false });
            guessValue(e);
          }}
        >
          X
        </button>
        <button
          className={click.Y ? "keys keysBtn" : "displayNone"}
          value="Y"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, Y: false });
            guessValue(e);
          }}
        >
          Y
        </button>
        <button
          className={click.Z ? "keys keysBtn" : "displayNone"}
          value="Z"
          onClick={(e) => {
            e.preventDefault();
            setClick({ ...click, Z: false });
            guessValue(e);
          }}
        >
          Z
        </button>
      </div>
    </>
  );
}
