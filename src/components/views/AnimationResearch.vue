<template>
    <div class="AnimationResearch">
        <div class="animation-item">
            <div class="animation-control">
                <div class="control-item">
                    <label for="alpha">Around X:</label>
                    <input id="alpha" class="input-angles" type="range" :min="minAlpha" :max="maxAlpha" v-model="cubeEuler.alpha">
                    <label for="beta">Around Y:</label>
                    <input id="beta" class="input-angles" type="range" :min="minBeta" :max="maxBeta" v-model="cubeEuler.beta">
                    <label for="gamma">Around Z:</label>
                    <input id="gamma" class="input-angles" type="range" :min="minGamma" :max="maxGamma" v-model="cubeEuler.gamma">
                    <button
                            class="btn-primary"
                            @click="resetCubeEuler()"
                    > Reset
                    </button>
                    {{ cubeEuler.alpha }} {{ cubeEuler.beta }} {{ cubeEuler.gamma }}
                </div>
            </div>
            <div class="animation-view">
                <div class="scene">
                    <div class="scene-label">XYZ</div>
                    <div class="plane"></div>
                    <div class="cube" :style="{transform: rotationEulerXYZ}">
                        <div class="face front">
                            <div class="face-text">front</div>
                        </div>
                        <div class="face back">
                            <div class="face-text">back</div>
                        </div>
                        <div class="face left">
                            <div class="face-text">left</div>
                        </div>
                        <div class="face right">
                            <div class="face-text">right</div>
                        </div>
                        <div class="face top">
                            <div class="face-text">top</div>
                        </div>
                        <div class="face bottom">
                            <div class="face-text">bottom</div>
                        </div>

                    </div>
                </div>
                <div class="scene">
                    <div class="scene-label">YXZ</div>
                    <div class="plane"></div>
                    <div class="cube" :style="{transform: rotationEulerYXZ}">
                        <div class="face front">
                            <div class="face-text">front</div>
                        </div>
                        <div class="face back">
                            <div class="face-text">back</div>
                        </div>
                        <div class="face left">
                            <div class="face-text">left</div>
                        </div>
                        <div class="face right">
                            <div class="face-text">right</div>
                        </div>
                        <div class="face top">
                            <div class="face-text">top</div>
                        </div>
                        <div class="face bottom">
                            <div class="face-text">bottom</div>
                        </div>

                    </div>
                </div>
                <div class="scene">
                    <div class="scene-label">ZXY</div>
                    <div class="plane"></div>
                    <div class="cube" :style="{transform: rotationEulerZXY}">
                        <div class="face front">
                            <div class="face-text">front</div>
                        </div>
                        <div class="face back">
                            <div class="face-text">back</div>
                        </div>
                        <div class="face left">
                            <div class="face-text">left</div>
                        </div>
                        <div class="face right">
                            <div class="face-text">right</div>
                        </div>
                        <div class="face top">
                            <div class="face-text">top</div>
                        </div>
                        <div class="face bottom">
                            <div class="face-text">bottom</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="animation-item">
            <div class="animation-control">
                <div class="control-item">
        <div class="matrix">
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" v-model="m.a1">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.a2">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.a3">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.a4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" v-model="m.b1">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.b2">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.b3">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.b4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" v-model="m.c1">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.c2">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.c3">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.c4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" v-model="m.d1">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.d2">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.d3">
                </div>
                <div class="matrix-cell">
                    <input type="number" v-model="m.d4">
                </div>
            </div>
        </div>
                    <button
                            class="btn-primary"
                            @click="resetTransformMatrix()"
                    > Reset
                    </button>
                </div>
            </div>
            <div class="animation-view">
                <div class="scene">
                    <div class="scene-label"></div>
                    <div class="plane"></div>
                    <div class="cube" :style="{transform:  transformM}">
                        <div class="face front">
                            <div class="face-text">front</div>
                        </div>
                        <div class="face back">
                            <div class="face-text">back</div>
                        </div>
                        <div class="face left">
                            <div class="face-text">left</div>
                        </div>
                        <div class="face right">
                            <div class="face-text">right</div>
                        </div>
                        <div class="face top">
                            <div class="face-text">top</div>
                        </div>
                        <div class="face bottom">
                            <div class="face-text">bottom</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
const delta = 60;

export default {
    name: "AnimationResearch",
    components: {},
    props: [],
    data() {
        return {
            minAlpha: -179, maxAlpha: 180, minBeta: -179, maxBeta: 180, minGamma: -179, maxGamma: 180,
            cubeEuler: {alpha: 0, beta: 0, gamma: 0},
            m: {a1: 1, b1: 0, c1: 0, d1: 0, a2: 0, b2: 1, c2: 0, d2: 0, a3: 0, b3: 0, c3: 1, d3: 0, a4: 0, b4: 0, c4: 0, d4: 1},
        }
    },
    computed: {

        rotationEulerXYZ() {
            return `rotateX(${this.cubeEuler.alpha}deg) rotateY(${this.cubeEuler.beta}deg) rotateZ(${this.cubeEuler.gamma}deg)`;
        },
        rotationEulerZXY() {
            return `rotateZ(${this.cubeEuler.gamma}deg) rotateX(${this.cubeEuler.alpha}deg) rotateY(${this.cubeEuler.beta}deg)`;
        },
        rotationEulerYXZ() {
            return `rotateY(${this.cubeEuler.beta}deg) rotateX(${this.cubeEuler.alpha}deg) rotateZ(${this.cubeEuler.gamma}deg)`;
        },
        transformM() {
            return `matrix3d(${this.m.a1}, ${this.m.b1}, ${this.m.c1}, ${this.m.d1}, ${this.m.a2}, ${this.m.b2}, ${this.m.c2}, ${this.m.d2}, ${this.m.a3}, ${this.m.b3}, ${this.m.c3}, ${this.m.d3}, ${this.m.a4}, ${this.m.b4}, ${this.m.c4}, ${this.m.d4})`;
        }
    },
    methods: {
        resetCubeEuler() {
            this.cubeEuler.alpha = 0;
            this.cubeEuler.beta = 0;
            this.cubeEuler.gamma = 0;
        },
        resetTransformMatrix() {
          this.m = {a1: 1, b1: 0, c1: 0, d1: 0, a2: 0, b2: 1, c2: 0, d2: 0, a3: 0, b3: 0, c3: 1, d3: 0, a4: 0, b4: 0, c4: 0, d4: 1};
        },

    },
    mounted() {
    },
}
</script>

<style lang="scss">
.AnimationResearch {
  position: relative;
  width: 95%;
  height: 90vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 5px;
  //border: 1px solid gray;
  //padding: 5px;

  .animation-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
    margin-top: 10px;
    //border: 1px solid gray;
    //padding: 5px;

    .animation-control {
      width: 300px;
      height: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 5px;
      padding: 5px;

      .btn-primary {
        width: 100%;
        background-color: white;
        margin-top: 10px;
        margin-bottom: 10px;
        transition: background-color 0.5s;

        &:hover {
          background-color: hsla(218, 79%, 77%, 1);
          transition: background-color 0.5s;
        }
      }

    }

    .animation-view {
      position: relative;
      width: auto;
      height: auto;
      border: 1px solid gray;
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
      padding: 10px;
    }
  }

  .scene {
    position: relative;
    left: 0px;
    width: 180px;
    height: 180px;
    //border: 1px solid #CCC;
    //margin: 80px;
    perspective: 1000px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .scene-label {
      position: absolute;
      top: 5px;
      left: 5px;
      color: black;
      z-index: 10;
    }
  }

  .cube {
    position: relative;
    width: 100px;
    height: 100px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-50px);
    transition: transform 0.5s ease-in-out;

    .face {
      position: absolute;
      width: 100px;
      height: 100px;
      border: 2px solid black;
      font-size: 40px;
      font-weight: bold;
      color: white;
      background-color: hsla(218, 79%, 77%, 0.5);
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .face-text {
        position: relative;
        font-size: 1.3rem;
      }

      &.front {
        transform: rotateY(0deg) translateZ(40px);
      }

      &.back {
        transform: rotateY(180deg) translateZ(40px);
      }

      &.right {
        transform: rotateY(90deg) translateZ(40px);
      }

      &.left {
        transform: rotateY(-90deg) translateZ(40px);
      }

      &.top {
        transform: rotateX(90deg) translateZ(40px);
      }

      &.bottom {
        transform: rotateX(-90deg) translateZ(40px);
      }
    }
  }

  .plane {
    position: absolute;
    left: 0px;
    width: 180px;
    height: 180px;
    border: 2px solid black;
    font-size: 40px;
    font-weight: bold;
    color: white;
    background-color: hsl(0, 61%, 79%, 1);
  }

  .input-angles {
    width: 100%;
  }
    input {
    width: 100%;
  }
  .matrix {
      position: relative;
      width: 100%;
      height: auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: center;
      .matrix-row {
          position: relative;
          width: 100%;
          height: auto;
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;

      }
      .matrix-cell {
          flex: 1 1 auto;
          //width: 60px;
          padding: 5px;
      }
  }
}
</style>
