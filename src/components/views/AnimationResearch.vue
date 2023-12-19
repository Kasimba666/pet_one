<template>
    <div class="AnimationResearch">
        <div class="animation-item">
            <div class="animation-control">
                <div class="control-item">
                    <label for="alpha">Alpha:</label>
                    <input id="alpha" type="range" :min="minAlpha" :max="maxAlpha" v-model="alpha">
                    <label for="beta">Beta:</label>
                    <input id="beta" type="range" :min="minBeta" :max="maxBeta" v-model="beta">
                    <label for="gamma">Gamma:</label>
                    <input id="gamma" type="range" :min="minGamma" :max="maxGamma" v-model="gamma">
                    <button
                            class="btn-primary"
                            @click="resetAngles()"
                    > Reset
                    </button>
                    {{ alpha }} {{ beta }} {{ gamma }} </br>
                    {{ x.toFixed(2) }} {{ y.toFixed(2) }} {{ z.toFixed(2) }}
                </div>
            </div>
            <div class="animation-view">
                <div class="scene">
                    <div class="cube" :style="{transform: rotationCube}">
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
            minAlpha: -179,
            maxAlpha: 180,
            minBeta: -179,
            maxBeta: 180,
            minGamma: -179,
            maxGamma: 180,
            alpha: 0,
            beta: 0,
            gamma: 0,
            r: 100,
        }
    },
    computed: {
        z() {
            return this.r * Math.sin(this.beta / 360 * 2 * 3.14);
        },
        x() {
            return this.r * Math.cos(this.beta / 360 * 2 * 3.14) * Math.cos(this.alpha / 360 * 2 * 3.14);
        },
        y() {
            return this.r * Math.cos(this.beta / 360 * 2 * 3.14) * Math.sin(this.alpha / 360 * 2 * 3.14);
        },
        rotationCube() {
            return `rotate3d(${this.x}, ${this.y}, ${this.z}, ${this.gamma}deg)`;
            // return `rotate3d(${this.x}, ${this.y}, ${this.z}, ${this.gamma}deg) translateZ(-100px)`;
        },
    },
    methods: {
        resetAngles() {
            this.alpha = 0;
            this.beta = 0;
            this.gamma = 0;
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
      width: 100%;
      height: 100%;
      border: 1px solid gray;

    }
  }

  .scene {
    position: relative;
    left: 100px;
    width: 300px;
    height: 300px;
    //border: 1px solid #CCC;
    //margin: 80px;
    perspective: 1000px;
  }

  .cube {
    position: relative;
    top: 50px;
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;

    .face {
      position: absolute;
      width: 200px;
      height: 200px;
      border: 2px solid black;
      font-size: 40px;
      font-weight: bold;
      color: white;
      background-color: hsla(218, 79%, 77%, 0.75);
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;

      .face-text {
        position: relative;
        font-size: 2rem;
      }

      &.front {
        transform: rotateY(0deg) translateZ(100px);
      }

      &.back {
        transform: rotateY(180deg) translateZ(100px);
      }

      &.right {
        transform: rotateY(90deg) translateZ(100px);
      }

      &.left {
        transform: rotateY(-90deg) translateZ(100px);
      }

      &.top {
        transform: rotateX(90deg) translateZ(100px);
      }

      &.bottom {
        transform: rotateX(-90deg) translateZ(100px);
      }
    }
  }

  input {
    width: 100%;
  }
}
</style>
