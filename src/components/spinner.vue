<template>
<div>
  <div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="text-loading">

  <div id="inTurnFadingTextG"><div id="inTurnFadingTextG_1" class="inTurnFadingTextG">L</div><div id="inTurnFadingTextG_2" class="inTurnFadingTextG">o</div><div id="inTurnFadingTextG_3" class="inTurnFadingTextG">a</div><div id="inTurnFadingTextG_4" class="inTurnFadingTextG">d</div><div id="inTurnFadingTextG_5" class="inTurnFadingTextG">i</div><div id="inTurnFadingTextG_6" class="inTurnFadingTextG">n</div><div id="inTurnFadingTextG_7" class="inTurnFadingTextG">g</div><div id="inTurnFadingTextG_8" class="inTurnFadingTextG">.</div><div id="inTurnFadingTextG_9" class="inTurnFadingTextG">.</div><div id="inTurnFadingTextG_10" class="inTurnFadingTextG">.</div></div>
  </div>

</div>
</template>

<script>
export default {
    name: "spinner"
};
</script>

<style scoped>
.lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  
  transform-origin: 40px 40px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: green;
  margin: -4px 0 0 -4px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
    
  }
  100% {
    transform: rotate(360deg);
   
  }
}


#inTurnFadingTextG{
	
	margin: auto;
  
}

.inTurnFadingTextG{
	color:green;
	font-family:Arial;
	font-size:20px;
	text-decoration:none;
	font-weight:normal;
	font-style:normal;
	float:left;
	animation-name:bounce_inTurnFadingTextG;
		-o-animation-name:bounce_inTurnFadingTextG;
		-ms-animation-name:bounce_inTurnFadingTextG;
		-webkit-animation-name:bounce_inTurnFadingTextG;
		-moz-animation-name:bounce_inTurnFadingTextG;
	animation-duration:2.09s;
		-o-animation-duration:2.09s;
		-ms-animation-duration:2.09s;
		-webkit-animation-duration:2.09s;
		-moz-animation-duration:2.09s;
	animation-iteration-count:infinite;
		-o-animation-iteration-count:infinite;
		-ms-animation-iteration-count:infinite;
		-webkit-animation-iteration-count:infinite;
		-moz-animation-iteration-count:infinite;
	animation-direction:normal;
		-o-animation-direction:normal;
		-ms-animation-direction:normal;
		-webkit-animation-direction:normal;
		-moz-animation-direction:normal;
}

#inTurnFadingTextG_1{
	animation-delay:0.75s;
		-o-animation-delay:0.75s;
		-ms-animation-delay:0.75s;
		-webkit-animation-delay:0.75s;
		-moz-animation-delay:0.75s;
}
#inTurnFadingTextG_2{
	animation-delay:0.9s;
		-o-animation-delay:0.9s;
		-ms-animation-delay:0.9s;
		-webkit-animation-delay:0.9s;
		-moz-animation-delay:0.9s;
}
#inTurnFadingTextG_3{
	animation-delay:1.05s;
		-o-animation-delay:1.05s;
		-ms-animation-delay:1.05s;
		-webkit-animation-delay:1.05s;
		-moz-animation-delay:1.05s;
}
#inTurnFadingTextG_4{
	animation-delay:1.2s;
		-o-animation-delay:1.2s;
		-ms-animation-delay:1.2s;
		-webkit-animation-delay:1.2s;
		-moz-animation-delay:1.2s;
}
#inTurnFadingTextG_5{
	animation-delay:1.35s;
		-o-animation-delay:1.35s;
		-ms-animation-delay:1.35s;
		-webkit-animation-delay:1.35s;
		-moz-animation-delay:1.35s;
}
#inTurnFadingTextG_6{
	animation-delay:1.5s;
		-o-animation-delay:1.5s;
		-ms-animation-delay:1.5s;
		-webkit-animation-delay:1.5s;
		-moz-animation-delay:1.5s;
}
#inTurnFadingTextG_7{
	animation-delay:1.64s;
		-o-animation-delay:1.64s;
		-ms-animation-delay:1.64s;
		-webkit-animation-delay:1.64s;
		-moz-animation-delay:1.64s;
}
#inTurnFadingTextG_8{
	animation-delay:1.79s;
		-o-animation-delay:1.79s;
		-ms-animation-delay:1.79s;
		-webkit-animation-delay:1.79s;
		-moz-animation-delay:1.79s;
}
#inTurnFadingTextG_9{
	animation-delay:1.94s;
		-o-animation-delay:1.94s;
		-ms-animation-delay:1.94s;
		-webkit-animation-delay:1.94s;
		-moz-animation-delay:1.94s;
}
#inTurnFadingTextG_10{
	animation-delay:2.09s;
		-o-animation-delay:2.09s;
		-ms-animation-delay:2.09s;
		-webkit-animation-delay:2.09s;
		-moz-animation-delay:2.09s;
}




@keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgba(153, 153, 153, 0.5);
	}

	100%{
		color:green;
	}
}

@-o-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgba(153, 153, 153, 0.5);
	}

	100%{
		color:green;
	}
}

@-ms-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgba(153, 153, 153, 0.5);
	}

	100%{
		color:green;
	}
}

@-webkit-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgba(153, 153, 153, 0.5);
	}

	100%{
		color:green;
	}
}

@-moz-keyframes bounce_inTurnFadingTextG{
	0%{
		color:rgba(153, 153, 153, 0.5);
	}

	100%{
		color:green;
	}
}
</style>>

</style>