<template>
    <div class="AnimationResearch">
        <div class="animation-item">
            <div class="animation-control">
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
                    <input type="number" step="0.1" v-model="m.a1">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.a2">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.a3">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.a4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.b1">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.b2">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.b3">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.b4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.c1">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.c2">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.c3">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.c4">
                </div>
            </div>
            <div class="matrix-row">
                <div class="matrix-cell">
                    <input type="number" step="0.005" v-model="m.d1">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.005" v-model="m.d2">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.005" v-model="m.d3">
                </div>
                <div class="matrix-cell">
                    <input type="number" step="0.1" v-model="m.d4">
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
        <div class="animation-item">
            <div class="animation-control">
                <div class="trans-list ">
                    <template v-if="transList.length>0">
                        <div class="trans-item" v-for="(item, t) of transList" :key="t">
                            <div class="trans-title">
                                {{item.type}}
                            </div>
                            <div class="trans-values" v-if="item.type === 'translate'">
                                <div class="trans-value-label">x: </div>
                                <div class="trans-value">
                                    <input class="trans-value-input" type="number" v-model="item.value.x">
                                </div>
                            </div>
                            <div class="trans-matrix">
                                <div class="trans-matrix-column" v-for="(row, j) of item.m" :key="j">
                                    <div class="trans-matrix-cell" v-for="(cell, i) of row" :key="i">
                                        {{ cell }}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </template>

                </div>
            </div>
            <div class="animation-view">
                <div class="scene">
                    <div class="scene-label"></div>
                    <div class="plane"></div>
                    <div class="cube" :style="{}">
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
          customM: [],
          transList: [],
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
      init() {
        this.customM = this.getIdentityMatrix(4);
        this.transList.push({type: 'translate', value: {x: 0, y: 0, z: 0}, m: [],});
        this.transList.push({type: 'scale', value: {x: 1, y: 2, z: 3}, m: [],});
        this.transList.push({type: 'skew', value: {ax: 1, ay: 2, az: 3}, m: [],});
        this.transList.push({type: 'rotateX', value: {a: 45}, m: [],});
        this.transList.push({type: 'rotateY', value: {a: 45}, m: [],});
        this.transList.push({type: 'rotateZ', value: {a: 45}, m: [],});
      },
      getMatrixTranslate(x, y, z) {
        let newM = this.getIdentityMatrix(4);
        newM[3][0] = x;
        newM[3][1] = y;
        newM[3][2] = z;
        return newM;
      },
      getMatrixScale(x, y, z) {
          let newM = this.getIdentityMatrix(4);
          newM[0][0] = x;
          newM[1][1] = y;
          newM[2][2] = z;
          return newM;
      },
      getMatrixSkew(ax, ay, az) {
          let newM = this.getIdentityMatrix(4);
          newM[2][0] = Math.tan(ax * Math.PI / 180).toFixed(2);
          newM[1][1] = Math.tan(ay * Math.PI / 180).toFixed(2);
          newM[0][2] = Math.tan(az * Math.PI / 180).toFixed(2);
          return newM;
      },
      getMatrixRotateX(a) {
          let newM = this.getIdentityMatrix(4);
          newM[1][1] = Math.cos(a * Math.PI / 180).toFixed(2);
          newM[1][2] = -Math.sin(a * Math.PI / 180).toFixed(2);
          newM[2][1] = Math.sin(a * Math.PI / 180).toFixed(2);
          newM[2][2] = Math.cos(a * Math.PI / 180).toFixed(2);
          return newM;
      },
      getMatrixRotateY(a) {
          let newM = this.getIdentityMatrix(4);
          newM[0][0] = Math.cos(a * Math.PI / 180).toFixed(2);
          newM[0][2] = Math.sin(a * Math.PI / 180).toFixed(2);
          newM[2][0] = -Math.sin(a * Math.PI / 180).toFixed(2);
          newM[2][2] = Math.cos(a * Math.PI / 180).toFixed(2);
          return newM;

      },
      getMatrixRotateZ(a) {
          let newM = this.getIdentityMatrix(4);
          newM[0][0] = Math.cos(a * Math.PI / 180).toFixed(2);
          newM[0][1] = Math.sin(a * Math.PI / 180).toFixed(2);
          newM[1][0] = -Math.sin(a * Math.PI / 180).toFixed(2);
          newM[1][1] = Math.cos(a * Math.PI / 180).toFixed(2);
          return newM;
      },
      recalcMatricies() {
          for (let i = 0; i < this.transList.length; i++) {
              switch (this.transList[i].type) {
                  case 'translate': {
                      this.transList[i].m = this.getMatrixTranslate(this.transList[i].value.x, this.transList[i].value.y, this.transList[i].value.z);
                      break;
                  };
                  case 'scale': {
                      this.transList[i].m = this.getMatrixScale(this.transList[i].value.x, this.transList[i].value.y, this.transList[i].value.z);
                      break;
                  };
                  case 'skew': {
                      this.transList[i].m = this.getMatrixSkew(this.transList[i].value.ax, this.transList[i].value.ay, this.transList[i].value.az);
                      break;
                  };
                  case 'rotateX': {
                      this.transList[i].m = this.getMatrixRotateX(this.transList[i].value.a);
                      break;
                  };
                  case 'rotateY': {
                      this.transList[i].m = this.getMatrixRotateY(this.transList[i].value.a);
                      break;
                  };
                  case 'rotateZ': {
                      this.transList[i].m = this.getMatrixRotateZ(this.transList[i].value.a);
                      break;
                  };
                  default: {}
              }
              }
      },
      getIdentityMatrix(l) {
        let newMatrix = [];
        for (let i = 0; i < l; i++) {
          let newColumn = [];
          for (let j = 0; j < l; j++)
            newColumn.push(i === j ? 1 : 0);
        newMatrix.push(newColumn);}
        return newMatrix
      },
        resetCubeEuler() {
            this.cubeEuler.alpha = 0;
            this.cubeEuler.beta = 0;
            this.cubeEuler.gamma = 0;
        },
        resetTransformMatrix() {
          this.m = {a1: 1, b1: 0, c1: 0, d1: 0, a2: 0, b2: 1, c2: 0, d2: 0, a3: 0, b3: 0, c3: 1, d3: 0, a4: 0, b4: 0, c4: 0, d4: 1};
        },
        functionTransform(v) {
          let args = [];
          for (let i = 0; i < v.length; i++)
            for (let j = 0; j < v[i].length; j++)
              args.push(v[i][j]);
          return 'matrix3d(' + args.join(', ') + ')';
        }
    },
    mounted() {
      this.init();
      this.recalcMatricies();
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
      width: auto;
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
    width: auto;
  }
    input {
    width: 100%;
  }
  .matrix {
      position: relative;
      width: 200px;
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
  .trans-list {
      width: auto;
      height: auto;
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 5px;

      .trans-item {
          width: 150px;
          height: auto;
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: center;
          gap: 5px;
          border: 1px solid hsla(0, 0%, 50%, 1);

          .trans-title {
              width: 100%;
              height: 30px;
              display: flex;
              flex-flow: column nowrap;
              justify-content: flex-start;
              align-items: center;
              gap: 5px;
          }
          .trans-values {
              width: 100%;
              display: flex;
              flex-flow: column nowrap;
              justify-content: flex-start;
              align-items: center;
              gap: 5px;

              .trans-value-label {

              }
              .trans-value {
                  width: 100%;
                  height: auto;

                  .trans-value-input {
                  width: 40px;
                  }
              }

          }
          .trans-matrix {
              width: 100%;
              height: auto;
              display: flex;
              flex-flow: row nowrap;
              justify-content: flex-start;
              align-items: center;
              gap: 5px;

              .trans-matrix-column {
                  position: relative;
                  width: 100%;
                  height: auto;
                  display: flex;
                  flex-flow: column nowrap;
                  justify-content: flex-start;
                  align-items: center;

              }
              .trans-matrix-cell {
                  //flex: 1 1 auto;
                  width: 20px;
                  padding: 5px;
                  font-size: 0.8rem;
              }

          }
      }
  }
}
</style>
