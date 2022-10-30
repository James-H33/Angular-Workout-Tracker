(self.webpackChunkangular_workout_tracker=self.webpackChunkangular_workout_tracker||[]).push([[367],{4367:(e,t,n)=>{"use strict";n.r(t),n.d(t,{WorkoutsModule:()=>ee});var i=n(1116),s=n(1462),o=n(3785),r=n(6304);class c{constructor(e){const t=Object.assign({weight:0,reps:0},e);this.weight=t.weight,this.reps=t.reps,this.isComplete=!1}}class a{constructor(e){const t=Object.assign({title:"",sets:[]},e);this.title=t.title,this.sets=t.sets.map(e=>new c(e))}}class d{constructor(e){const t=Object.assign({},e);this.date=t.date,this.duration=t.duration}}class l{constructor(e){const t=Object.assign({exercises:[],history:[]},e);this.id=t.id,this.title=t.title,this.exercises=t.exercises.map(e=>new a(e)),this.history=t.history.map(e=>new d(e))}}var p=n(8512),u=n(8619);let g=(()=>{class e{constructor(){this.currentState=new l,this.state$=new p.X(new l)}watch(){return this.state$.asObservable()}set(e){this.currentState=e,this.state$.next(e)}addExercise(e){const t=new a({title:e});t.sets=[new c];const n=[...this.currentState.exercises,t];this.set(Object.assign(Object.assign({},this.currentState),{exercises:n}))}addSet(e){const t=new c,n=this.currentState,i=n.exercises[e],s=i.sets[i.sets.length-1];s&&(t.reps=s.reps,t.weight=s.weight);const o=[...i.sets,t],r=Object.assign(Object.assign({},i),{sets:o}),a=this.replaceExerciseAtIndex(e,r);this.set(Object.assign(Object.assign({},n),{exercises:a}))}updateSet(e,t,n){const i=this.currentState,s=i.exercises[e],o=s.sets.map((e,i)=>i===t?n:e),r=Object.assign(Object.assign({},s),{sets:o}),c=this.replaceExerciseAtIndex(e,r);this.set(Object.assign(Object.assign({},i),{exercises:c}))}deleteSet(e,t){const n=this.currentState,i=n.exercises[e],s=i.sets.filter((e,n)=>t!==n),o=Object.assign(Object.assign({},i),{sets:s}),r=this.replaceExerciseAtIndex(e,o);this.set(Object.assign(Object.assign({},n),{exercises:r}))}removeExercise(e){const t=this.currentState,n=t.exercises.filter((t,n)=>e!==n);this.set(Object.assign(Object.assign({},t),{exercises:n}))}replaceExerciseAtIndex(e,t){return this.currentState.exercises.map((n,i)=>i===e?t:n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac}),e})();var x=n(7750);let h=(()=>{class e{constructor(e){this.http=e,this.workouts=[],this.workouts$=new p.X(this.workouts)}get(){var e=this;return(0,r.Z)(function*(){const t=(yield e.http.get("workouts")).workouts.map(e=>new l(e));return e.workouts=t,e.workouts$.next(e.workouts),t})()}getById(e){var t=this;return(0,r.Z)(function*(){return t.workouts.length||(yield t.get()),t.workouts.find(t=>t.id===e)})()}addWorkout(e){var t=this;return(0,r.Z)(function*(){const n=yield t.http.post("workouts",e),i=[...t.workouts,n];t.workouts$.next(i)})()}update(e){var t=this;return(0,r.Z)(function*(){return t.http.put(`workouts/${e.id}`,e)})()}delete(e){var t=this;return(0,r.Z)(function*(){return t.http.delete(`workouts/${e}`)})()}}return e.\u0275fac=function(t){return new(t||e)(u.LFG(x.n))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const f=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:t&&11).toString(16)});let w=(()=>{class e{constructor(){this._time=0,this._startTime=0}get formattedTime(){return(e=>{let t="0";return e>=60&&(t=Math.floor(e/3600),e-=3600*t),t+":"+function(e){if(e>=60){let t=Math.floor(e/60),n=e%60;return n=n<10?`0${n}`:n,t=t<10?`0${t}`:t,`${t}:${n}`}return e<10?`00:0${e}`:`00:${e}`}(e)})(this._time)}ngOnInit(){this._startTime=(new Date).valueOf(),this._interval=setInterval(()=>{var e;this._time=(e=this._startTime,Math.round(((new Date).valueOf()-e)/1e3))},200)}ngOnDestroy(){clearInterval(this._interval)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["Timer"]],decls:2,vars:1,consts:[[1,"timer"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u._uU(1),u.qZA()),2&e&&(u.xp6(1),u.Oqu(t.formattedTime))},encapsulation:2}),e})();const m="https://static.thenounproject.com/png/1365947-200.png",v=[{title:"Pull Ups",image:m},{title:"Bench Press",image:m},{title:"Inclinde Bench",image:m},{title:"Barbel Squat",image:m},{title:"Incline Press",image:m},{title:"Bulgarian Squat",image:m},{title:"Deadlift",image:m},{title:"Romanian Deadlift",image:m},{title:"Straight Leg Deadlift",image:m},{title:"Barbel Curl",image:m},{title:"Hip Thrusts",image:m},{title:"Lat Pulldown",image:m},{title:"Bent Over Rows",image:m},{title:"Chest Fly",image:m},{title:"Tricep Extension",image:m},{title:"Bicep Curl",image:m},{title:"Lateral Raise",image:m},{title:"Dips",image:m}];function k(e,t){if(1&e){const e=u.EpF();u.ynx(0),u.TgZ(1,"div",6),u.NdJ("click",function(){const t=u.CHM(e).$implicit;return u.oxw(2).select(t)}),u._UZ(2,"img",7),u.TgZ(3,"label"),u._uU(4),u.qZA(),u.qZA(),u.BQk()}if(2&e){const e=t.$implicit;u.xp6(2),u.Q6J("src",e.image,u.LSH),u.xp6(2),u.Oqu(e.title)}}function Z(e,t){if(1&e){const e=u.EpF();u.ynx(0),u.TgZ(1,"div",1),u.TgZ(2,"div",2),u.TgZ(3,"h4"),u._uU(4,"Pick a Exercise"),u.qZA(),u.TgZ(5,"div",3),u.YNc(6,k,5,2,"ng-container",4),u.qZA(),u.qZA(),u.TgZ(7,"div",5),u.NdJ("click",function(){return u.CHM(e),u.oxw().close()}),u.qZA(),u.qZA(),u.BQk()}if(2&e){const e=u.oxw();u.xp6(6),u.Q6J("ngForOf",e.exercises)}}let b=(()=>{class e{constructor(e){this.windowRef=e,this.closed=new u.vpe,this.selected=new u.vpe,this._isOpen=!1,this.exercises=v}set isOpen(e){this._isOpen=e,this.isOpen?this.preventScrolling():this.allowScrolling()}get isOpen(){return this._isOpen}preventScrolling(){this.windowRef.document.body.style.overflow="hidden"}allowScrolling(){this.windowRef.document.body.style.overflow="unset"}close(){this.closed.emit()}select(e){this.selected.emit(e),this.close()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36("Window"))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-exercise-picker"]],inputs:{isOpen:"isOpen"},outputs:{closed:"closed",selected:"selected"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"exercise-picker"],[1,"exercise-picker-content"],[1,"exercise-picker-list"],[4,"ngFor","ngForOf"],[1,"exercise-picker-backdrop",3,"click"],[1,"exercise-picker-list-item",3,"click"],["alt","workout",3,"src"]],template:function(e,t){1&e&&u.YNc(0,Z,8,1,"ng-container",0),2&e&&u.Q6J("ngIf",t.isOpen)},directives:[i.O5,i.sg],styles:[".exercise-picker[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;top:0;left:0;right:0;bottom:0;z-index:1}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-content[_ngcontent-%COMP%]{margin-bottom:1rem;width:90vw;min-width:300px;max-width:500px;min-height:300px;background:#fff;border-radius:8px;padding:30px;animation:SlideInFromBottom .3s ease-in-out;z-index:1;box-sizing:border-box}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]{height:300px;border-top:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow-y:scroll}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]   .exercise-picker-list-item[_ngcontent-%COMP%]{display:flex;grid-column-gap:10px;column-gap:10px;align-items:center;padding:5px 0}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]   .exercise-picker-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}@keyframes SlideInFromBottom{0%{transform:translateY(100px)}to{transform:translateY(0)}}.exercise-picker-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background:#00000080}"]}),e})();const O=["*"];let _=(()=>{class e{constructor(e){this._baseHref=e,this.isActive=!1}get baseUrl(){return this._baseHref}activate(){this.toggle(!0)}deactivate(){this.toggle(!1)}toggle(e,t){null==t||t.stopPropagation(),this.isActive=e}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(i.mr))},e.\u0275cmp=u.Xpm({type:e,selectors:[["Expander"]],ngContentSelectors:O,decls:5,vars:3,consts:[[1,"expander-wrapper"],[1,"expander-btn",3,"click"],["alt","...",3,"src"],[1,"expander-content"]],template:function(e,t){1&e&&(u.F$t(),u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.NdJ("click",function(e){return t.toggle(!0,e)}),u._UZ(2,"img",2),u.qZA(),u.TgZ(3,"div",3),u.Hsn(4),u.qZA(),u.qZA()),2&e&&(u.xp6(2),u.MGl("src","",t.baseUrl,"assets/ellipse.svg",u.LSH),u.xp6(1),u.ekj("active",t.isActive))},styles:['.expander-wrapper[_ngcontent-%COMP%]{position:relative}.expander-wrapper.active[_ngcontent-%COMP%]{z-index:4}.expander-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.expander-btn[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:700;line-height:6px;width:30px;height:15px;padding:0 6px;background:#457b9d;border-radius:8px;position:absolute;right:0;top:2px;cursor:pointer;z-index:1;opacity:1;letter-spacing:1px}.expander-btn.active[_ngcontent-%COMP%]{opacity:0;z-index:0}.expander-btn[_ngcontent-%COMP%]:before{content:"";padding:15px;width:30px;position:absolute;left:0;top:-50%;z-index:-1;background:#0000}.expander-content[_ngcontent-%COMP%]{display:grid;grid-auto-rows:20px;grid-row-gap:5px;row-gap:5px;color:#fff;padding:10px;min-width:120px;min-height:60px;box-sizing:border-box;border-radius:8px;box-shadow:0 3px 6px 1px #3c3c3c;background:#457b9d;opacity:0;visibility:hidden;transform:translate3d(-100%,-20px,0)}.expander-content[_ngcontent-%COMP%], .expander-content.active[_ngcontent-%COMP%]{position:absolute;transition:transform .35s ease,opacity .35s ease}.expander-content.active[_ngcontent-%COMP%]{opacity:1;z-index:10;visibility:visible;transform:translate3d(-100%,0,0)}.expander-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{cursor:pointer}']}),e})();function C(e,t){1&e&&u._UZ(0,"img",3)}let A=(()=>{class e{constructor(){this.selected=!1,this.disabled=!1,this.selectedChange=new u.vpe,this.id=f()}onSelected(){this.disabled||(this.selected=!this.selected,this.selectedChange.emit())}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["Checkbox"]],inputs:{selected:"selected",disabled:"disabled"},outputs:{selectedChange:"selectedChange"},decls:3,vars:1,consts:[[1,"checkbox",3,"click"],[1,"checkbox-checkmark"],["src","assets/checkmark.png",4,"ngIf"],["src","assets/checkmark.png"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.NdJ("click",function(){return t.onSelected()}),u.TgZ(1,"div",1),u.YNc(2,C,1,0,"img",2),u.qZA(),u.qZA()),2&e&&(u.xp6(2),u.Q6J("ngIf",t.selected))},directives:[i.O5],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{constructor(){this.clicked=new u.vpe,this.isActive=!1}dismiss(){this.clicked.emit()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["Backdrop"]],inputs:{isActive:"isActive"},outputs:{clicked:"clicked"},decls:1,vars:2,consts:[[1,"global-backdrop",3,"click"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.NdJ("click",function(){return t.dismiss()}),u.qZA()),2&e&&u.ekj("active",t.isActive)},encapsulation:2}),e})();var y=n(8318),P=n(8470),T=n(5024),q=n(9996);function S(e,t,n,i){return(0,T.m)(n)&&(i=n,n=void 0),i?S(e,t,n).pipe((0,q.U)(e=>(0,P.k)(e)?i(...e):i(e))):new y.y(i=>{J(e,t,function(e){i.next(arguments.length>1?Array.prototype.slice.call(arguments):e)},i,n)})}function J(e,t,n,i,s){let o;if(function(e){return e&&"function"==typeof e.addEventListener&&"function"==typeof e.removeEventListener}(e)){const i=e;e.addEventListener(t,n,s),o=()=>i.removeEventListener(t,n,s)}else if(function(e){return e&&"function"==typeof e.on&&"function"==typeof e.off}(e)){const i=e;e.on(t,n),o=()=>i.off(t,n)}else if(function(e){return e&&"function"==typeof e.addListener&&"function"==typeof e.removeListener}(e)){const i=e;e.addListener(t,n),o=()=>i.removeListener(t,n)}else{if(!e||!e.length)throw new TypeError("Invalid event target");for(let o=0,r=e.length;o<r;o++)J(e[o],t,n,i,s)}i.add(o)}var I=n(3530);const j=["ContentWrapper"],E=function(e){return{transform:e}};let U=(()=>{class e{constructor(e){this.state=e,this.set=new c,this.exerciseIndex=0,this.setIndex=0,this.position=0}ngAfterViewInit(){setTimeout(()=>{this.attachSwipeToDeleteListener()},0)}attachSwipeToDeleteListener(){var e;const t=null===(e=this.contentWrapperRef)||void 0===e?void 0:e.nativeElement;S(t,"touchstart").subscribe(e=>{let n=e.touches[0].clientX;const i=S(t,"touchmove").subscribe(e=>{const t=Math.round(n-e.touches[0].clientX);t<=0?this.slideBack():this.position=t>=50?-100:-t});S(t,"touchend").pipe((0,I.P)()).subscribe(()=>{i.unsubscribe(),Math.abs(this.position)>=100||this.slideBack()})})}slideBack(){if(this.position<0){let e=this.position+2;this.position=e>=0?0:e,requestAnimationFrame(this.slideBack.bind(this))}}onComplete(){const e=Object.assign(Object.assign({},this.set),{isComplete:!this.set.isComplete});this.updateState(e)}onRepsChanged(e){const t=e.target.value,n=Object.assign(Object.assign({},this.set),{reps:parseInt(t)});this.updateState(n)}onWeightChanged(e){const t=e.target.value,n=Object.assign(Object.assign({},this.set),{weight:parseInt(t)});this.updateState(n)}delete(){this.state.deleteSet(this.exerciseIndex,this.setIndex)}updateState(e){this.state.updateSet(this.exerciseIndex,this.setIndex,e)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(g))},e.\u0275cmp=u.Xpm({type:e,selectors:[["Set"]],viewQuery:function(e,t){if(1&e&&u.Gf(j,5),2&e){let e;u.iGM(e=u.CRH())&&(t.contentWrapperRef=e.first)}},inputs:{set:"set",exerciseIndex:"exerciseIndex",setIndex:"setIndex"},decls:13,vars:12,consts:[[1,"set"],["ContentWrapper",""],[1,"set-delete"],[3,"click"],[1,"set-num"],["type","number",1,"set-input",3,"value","disabled","blur"],[3,"selected","selectedChange"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0,1),u.TgZ(2,"div",2),u.TgZ(3,"span",3),u.NdJ("click",function(){return t.delete()}),u._uU(4,"Delete"),u.qZA(),u.qZA(),u.TgZ(5,"div",4),u._uU(6),u.qZA(),u.TgZ(7,"div"),u.TgZ(8,"input",5),u.NdJ("blur",function(e){return t.onWeightChanged(e)}),u.qZA(),u.qZA(),u.TgZ(9,"div"),u.TgZ(10,"input",5),u.NdJ("blur",function(e){return t.onRepsChanged(e)}),u.qZA(),u.qZA(),u.TgZ(11,"div"),u.TgZ(12,"Checkbox",6),u.NdJ("selectedChange",function(){return t.onComplete()}),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.Akn(u.VKq(10,E,"translateX("+t.position+"px)")),u.ekj("complete",t.set.isComplete),u.xp6(6),u.Oqu(t.setIndex+1),u.xp6(2),u.Q6J("value",t.set.weight)("disabled",t.set.isComplete),u.xp6(2),u.Q6J("value",t.set.reps)("disabled",t.set.isComplete),u.xp6(2),u.Q6J("selected",t.set.isComplete))},directives:[A],styles:[".set[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 35px;padding:8px 0;transform:translateX(0);position:relative;align-items:center}.set[_ngcontent-%COMP%]   input.set-input[_ngcontent-%COMP%], .set[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{height:20px}.set.complete[_ngcontent-%COMP%]{background:#a5caa573}.set.complete[_ngcontent-%COMP%]   input.set-input[_ngcontent-%COMP%]{background:#0000;border:1px solid #7fab7f73;color:#7fab7f73;height:20px}.set-num[_ngcontent-%COMP%]{padding-left:14px}.set-delete[_ngcontent-%COMP%]{position:absolute;width:350px;right:-360px;top:0;bottom:0;background:#cb4646;display:grid;align-items:center}.set-delete[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;color:#fff;font-weight:700}"]}),e})();const N=["Expander"];function F(e,t){if(1&e&&u._UZ(0,"Set",12),2&e){const e=t.$implicit,n=t.index,i=u.oxw();u.Q6J("set",e)("exerciseIndex",i.exerciseIndex)("setIndex",n)}}let B=(()=>{class e{constructor(e){this.state=e,this.exercise=new a,this.exerciseIndex=0}remove(){this.state.removeExercise(this.exerciseIndex)}addSet(){this.state.addSet(this.exerciseIndex)}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(g))},e.\u0275cmp=u.Xpm({type:e,selectors:[["ExerciseCard"]],viewQuery:function(e,t){if(1&e&&u.Gf(N,5),2&e){let e;u.iGM(e=u.CRH())&&(t.expanderRef=e.first)}},inputs:{exercise:"exercise",exerciseIndex:"exerciseIndex"},decls:24,vars:5,consts:[[1,"exercise-wrapper"],[1,"exercise-title-wrapper"],[1,"exercise-title"],["Expander",""],[3,"click"],[1,"exercise-set-wrapper"],[1,"exercise-sets-header"],[3,"selected","disabled"],[1,"exercise-sets"],[3,"set","exerciseIndex","setIndex",4,"ngFor","ngForOf"],[1,"AddSetBtn",3,"click"],[3,"isActive","clicked"],[3,"set","exerciseIndex","setIndex"]],template:function(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"h4",2),u._uU(3),u.qZA(),u.TgZ(4,"Expander",null,3),u.TgZ(6,"span",4),u.NdJ("click",function(){return t.remove()}),u._uU(7,"Remove"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"div",5),u.TgZ(9,"div",6),u.TgZ(10,"div"),u._uU(11,"Set"),u.qZA(),u.TgZ(12,"div"),u._uU(13,"lbs"),u.qZA(),u.TgZ(14,"div"),u._uU(15,"Reps"),u.qZA(),u.TgZ(16,"div"),u._UZ(17,"Checkbox",7),u.qZA(),u.qZA(),u.TgZ(18,"div",8),u.YNc(19,F,1,3,"Set",9),u.qZA(),u.qZA(),u.TgZ(20,"div",10),u.NdJ("click",function(){return t.addSet()}),u.TgZ(21,"span"),u._uU(22,"Add Set"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(23,"Backdrop",11),u.NdJ("clicked",function(){return u.CHM(e),u.MAs(5).deactivate()}),u.qZA()}if(2&e){const e=u.MAs(5);u.xp6(3),u.hij(" ",t.exercise.title," "),u.xp6(14),u.Q6J("selected",!0)("disabled",!0),u.xp6(2),u.Q6J("ngForOf",t.exercise.sets),u.xp6(4),u.Q6J("isActive",e.isActive)}},directives:[_,A,i.sg,M,U],styles:[".exercise-wrapper[_ngcontent-%COMP%]{margin-bottom:20px}.exercise-title[_ngcontent-%COMP%]{color:#0093ff}.exercise-set-wrapper[_ngcontent-%COMP%]{margin-bottom:20px}.exercise-sets-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 35px;margin:10px 0}.exercise-sets-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:25px}.exercise-title-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;font-size:16px;margin-bottom:20px}.exercise-sets[_ngcontent-%COMP%]{display:grid;grid-row-gap:3px;row-gap:3px}.AddSetBtn[_ngcontent-%COMP%]{display:flex;justify-content:center;background:#d5d5d5;border-radius:8px;font-size:14px;padding:3px}"]}),e})();function Q(e,t){if(1&e&&(u.TgZ(0,"div"),u._UZ(1,"ExerciseCard",10),u.qZA()),2&e){const e=t.$implicit,n=t.index;u.xp6(1),u.Q6J("exercise",e)("exerciseIndex",n)}}let W=(()=>{class e{constructor(e,t,n,i){this.router=e,this.workoutService=t,this.state=n,this.routing=i,this.workout=new l,this.isChoosingExercise=!1}ngOnInit(){this.state.watch().subscribe(e=>this.workout=e),this.router.paramMap.subscribe(e=>{const t=e.get("id");t&&this.getWorkout(t)})}complete(){var e=this;return(0,r.Z)(function*(){yield e.workoutService.update(e.workout),e.routing.navigate([""])})()}cancel(){var e=this;return(0,r.Z)(function*(){yield e.workoutService.update(e.workout),e.routing.navigate([""])})()}addExercise(e){this.state.addExercise(e.title)}openExercisePicker(){this.isChoosingExercise=!0}getWorkout(e){var t=this;return(0,r.Z)(function*(){const n=yield t.workoutService.getById(e);t.state.set(n)})()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(o.gz),u.Y36(h),u.Y36(g),u.Y36(o.F0))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-workout-detail"]],inputs:{workout:"workout"},features:[u._Bn([g])],decls:16,vars:3,consts:[[1,"workout-detail"],[1,"workout-detail-header"],[3,"click"],[1,"secondary",3,"click"],[1,"workout-detail-title"],[1,"workout-detail-sets"],[4,"ngFor","ngForOf"],[1,"workout-detail-add-exercise"],[1,"pill-button--blue",3,"click"],[3,"isOpen","closed","selected"],[3,"exercise","exerciseIndex"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"button",2),u.NdJ("click",function(){return t.complete()}),u._uU(3,"Finish"),u.qZA(),u.TgZ(4,"button",3),u.NdJ("click",function(){return t.cancel()}),u._uU(5,"Cancel"),u.qZA(),u.qZA(),u.TgZ(6,"div",4),u.TgZ(7,"h2"),u._uU(8),u.qZA(),u._UZ(9,"Timer"),u.qZA(),u.TgZ(10,"div",5),u.YNc(11,Q,2,2,"div",6),u.qZA(),u.TgZ(12,"div",7),u.TgZ(13,"button",8),u.NdJ("click",function(){return t.openExercisePicker()}),u._uU(14,"Add Exercise"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(15,"app-exercise-picker",9),u.NdJ("closed",function(){return t.isChoosingExercise=!1})("selected",function(e){return t.addExercise(e)}),u.qZA()),2&e&&(u.xp6(8),u.Oqu(t.workout.title),u.xp6(3),u.Q6J("ngForOf",t.workout.exercises),u.xp6(4),u.Q6J("isOpen",t.isChoosingExercise))},directives:[w,i.sg,b,B],styles:[".workout-detail[_ngcontent-%COMP%]{display:grid;padding:20px 20px 50px}.workout-detail-title[_ngcontent-%COMP%]{margin-bottom:20px}.workout-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.workout-detail-header[_ngcontent-%COMP%]{display:flex;grid-column-gap:10px;column-gap:10px;margin-bottom:20px;justify-content:space-between;align-items:center}.workout-detail-sets[_ngcontent-%COMP%]{display:grid;overflow:hidden}.FinishModalTitle[_ngcontent-%COMP%], .ModalContentTitle[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:20px}.FinishModalActions[_ngcontent-%COMP%]{display:grid;grid-row-gap:10px;row-gap:10px}.workout-detail-add-exercise[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]}),e})();const z=[[["","modalHeader",""]],[["","modalBody",""]],[["","modalFooter",""]]],H=["[modalHeader]","[modalBody]","[modalFooter]"];let $=(()=>{class e{constructor(e){this.windowRef=e,this.close=new u.vpe,this._isActive=!1}set isActive(e){this._isActive=e,this.isActive?this.preventScrolling():this.allowScrolling()}get isActive(){return this._isActive}preventScrolling(){this.windowRef.document.body.style.overflow="hidden"}allowScrolling(){this.windowRef.document.body.style.overflow="unset"}deactivate(){this.isActive=!1,this.close.emit()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36("Window"))},e.\u0275cmp=u.Xpm({type:e,selectors:[["Modal"]],inputs:{isActive:"isActive"},outputs:{close:"close"},ngContentSelectors:H,decls:7,vars:4,consts:[[1,"modal"],["modalRef",""],[1,"global-backdrop",3,"click"]],template:function(e,t){1&e&&(u.F$t(z),u.TgZ(0,"div",0,1),u.Hsn(2),u.Hsn(3,1),u.Hsn(4,2),u.qZA(),u.TgZ(5,"div",2),u.NdJ("click",function(){return t.deactivate()}),u._UZ(6,"div"),u.qZA()),2&e&&(u.ekj("active",t.isActive),u.xp6(5),u.ekj("active",t.isActive))},encapsulation:2}),e})();const Y=["Expander"];function R(e,t){if(1&e&&(u.TgZ(0,"li"),u._uU(1),u.qZA()),2&e){const e=t.$implicit;u.xp6(1),u.Oqu(e.title)}}const L=function(e){return["workout",e]};let X=(()=>{class e{constructor(e){this.workoutsService=e,this.workout=new l}delete(e){var t=this;return(0,r.Z)(function*(){var n;e.stopPropagation(),yield t.workoutsService.delete(t.workout.id),yield t.workoutsService.get(),null===(n=t.expander)||void 0===n||n.deactivate()})()}viewHistory(e){var t;e.stopPropagation(),console.log("viewHistory!"),null===(t=this.expander)||void 0===t||t.deactivate()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(h))},e.\u0275cmp=u.Xpm({type:e,selectors:[["WorkoutCard"]],viewQuery:function(e,t){if(1&e&&u.Gf(Y,5),2&e){let e;u.iGM(e=u.CRH())&&(t.expander=e.first)}},inputs:{workout:"workout"},decls:14,vars:6,consts:[[1,"wrapper",3,"routerLink"],[1,"expander"],["Expander",""],[3,"click"],[4,"ngFor","ngForOf"],[3,"isActive","clicked"]],template:function(e,t){if(1&e){const e=u.EpF();u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"Expander",null,2),u.TgZ(4,"div",3),u.NdJ("click",function(e){return t.viewHistory(e)}),u._uU(5,"View History"),u.qZA(),u.TgZ(6,"div",3),u.NdJ("click",function(e){return t.delete(e)}),u._uU(7,"Delete"),u.qZA(),u.qZA(),u.qZA(),u.TgZ(8,"div"),u.TgZ(9,"label"),u._uU(10),u.qZA(),u.TgZ(11,"ul"),u.YNc(12,R,2,1,"li",4),u.qZA(),u.qZA(),u.qZA(),u.TgZ(13,"Backdrop",5),u.NdJ("clicked",function(){return u.CHM(e),u.MAs(3).deactivate()}),u.qZA()}if(2&e){const e=u.MAs(3);u.Q6J("routerLink",u.VKq(4,L,t.workout.id)),u.xp6(10),u.Oqu(t.workout.title),u.xp6(2),u.Q6J("ngForOf",t.workout.exercises),u.xp6(1),u.Q6J("isActive",e.isActive)}},directives:[o.rH,_,i.sg,M],styles:[".wrapper[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:20px;position:relative}.wrapper[_ngcontent-%COMP%]:active{background:#f5f5f5}.wrapper[_ngcontent-%COMP%]:hover{cursor:pointer}.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;display:block;margin-bottom:10px}.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px;list-style:circle}.wrapper-active[_ngcontent-%COMP%]   .Expander[_ngcontent-%COMP%]{z-index:10}.expander[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px}"],changeDetection:0}),e})();function D(e,t){1&e&&u._UZ(0,"WorkoutCard",10),2&e&&u.Q6J("workout",t.$implicit)}const G=[{path:"",component:(()=>{class e{constructor(e){this.workoutsService=e,this.workouts=[],this.isActive=!1,this.newWorkoutTitle=""}ngOnInit(){var e=this;return(0,r.Z)(function*(){yield e.workoutsService.get(),e.workoutsService.workouts$.subscribe(t=>{e.workouts=t})})()}openModal(){this.isActive=!0}closeModal(){this.isActive=!1,this.newWorkoutTitle=""}createWorkout(){var e=this;return(0,r.Z)(function*(){const t=new l;t.title=e.newWorkoutTitle,t.id=f(),yield e.workoutsService.addWorkout(t),e.closeModal()})()}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(h))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-workouts"]],decls:20,vars:3,consts:[[1,"wrapper"],[1,"start-cta"],[3,"click"],[1,"workout-section"],[3,"workout",4,"ngFor","ngForOf"],[3,"isActive","close"],["modalBody","",1,"new-workout"],["type","text",1,"standard",3,"ngModel","ngModelChange"],[1,"new-workout-btns"],[1,"secondary",3,"click"],[3,"workout"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u.TgZ(1,"h2"),u._uU(2,"Workout Tracker"),u.qZA(),u.TgZ(3,"div",1),u.TgZ(4,"button",2),u.NdJ("click",function(){return t.openModal()}),u._uU(5,"Start New Workout"),u.qZA(),u.qZA(),u.TgZ(6,"div",3),u.TgZ(7,"h3"),u._uU(8,"Workouts"),u.qZA(),u.YNc(9,D,1,1,"WorkoutCard",4),u.qZA(),u.TgZ(10,"Modal",5),u.NdJ("close",function(){return t.closeModal()}),u.TgZ(11,"div",6),u.TgZ(12,"label"),u._uU(13,"Name your workout: "),u.qZA(),u.TgZ(14,"input",7),u.NdJ("ngModelChange",function(e){return t.newWorkoutTitle=e}),u.qZA(),u.TgZ(15,"div",8),u.TgZ(16,"button",2),u.NdJ("click",function(){return t.createWorkout()}),u._uU(17," Create "),u.qZA(),u.TgZ(18,"button",9),u.NdJ("click",function(){return t.closeModal()}),u._uU(19," Cancel "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&e&&(u.xp6(9),u.Q6J("ngForOf",t.workouts),u.xp6(1),u.Q6J("isActive",t.isActive),u.xp6(4),u.Q6J("ngModel",t.newWorkoutTitle))},directives:[i.sg,$,s.Fj,s.JJ,s.On,X],styles:[".wrapper[_ngcontent-%COMP%]{padding:20px}.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.start-cta[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.workout-section[_ngcontent-%COMP%]{display:grid;grid-row-gap:1em;row-gap:1em;grid-column-gap:2em;column-gap:2em}.workout-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px}.add-workout[_ngcontent-%COMP%]{display:grid;grid-row-gap:1em;row-gap:1em}.add-workout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:6px;outline:none;border:1px solid gray;padding-left:8px;box-sizing:border-box;color:#333;font-size:15px;font-weight:700}.new-workout[_ngcontent-%COMP%]{display:grid;grid-row-gap:10px;row-gap:10px}.new-workout[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:5px}.new-workout[_ngcontent-%COMP%]   .new-workout-btns[_ngcontent-%COMP%]{display:grid}"]}),e})()},{path:"workout/:id",component:W}];let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[o.Bz.forChild(G)],o.Bz]}),e})();var K=n(5425);let ee=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,s.u5,K.m,V]]}),e})()}}]);