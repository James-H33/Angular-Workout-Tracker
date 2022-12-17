"use strict";(self.webpackChunkAngularWorkoutTracker=self.webpackChunkAngularWorkoutTracker||[]).push([[709],{7041:(Ce,Z,d)=>{d.r(Z),d.d(Z,{WorkoutsModule:()=>_e});var a=d(6895),_=d(4719),e=d(6738);let v=(()=>{class n{constructor(){this.clicked=new e.vpe,this.isActive=!1}dismiss(){this.clicked.emit()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["Backdrop"]],inputs:{isActive:"isActive"},outputs:{clicked:"clicked"},standalone:!0,features:[e.jDz],decls:1,vars:2,consts:[[1,"global-backdrop",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.dismiss()}),e.qZA()),2&t&&e.ekj("active",o.isActive)},dependencies:[a.ez],encapsulation:2}),n})();const D=["*"];let b=(()=>{class n{constructor(t){this._baseHref=t,this.isActive=!1}get baseUrl(){return this._baseHref}activate(){this.toggle(!0)}deactivate(){this.toggle(!1)}toggle(t,o){o?.stopPropagation(),this.isActive=t}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.mr))},n.\u0275cmp=e.Xpm({type:n,selectors:[["Expander"]],standalone:!0,features:[e.jDz],ngContentSelectors:D,decls:5,vars:3,consts:[[1,"expander-wrapper"],[1,"expander-btn",3,"click"],["alt","...",3,"src"],[1,"expander-content"]],template:function(t,o){1&t&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(s){return o.toggle(!0,s)}),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3),e.Hsn(4),e.qZA()()),2&t&&(e.xp6(2),e.MGl("src","",o.baseUrl,"assets/ellipse.svg",e.LSH),e.xp6(1),e.ekj("active",o.isActive))},dependencies:[a.ez],styles:['.expander-wrapper[_ngcontent-%COMP%]{position:relative}.expander-wrapper.active[_ngcontent-%COMP%]{z-index:4}.expander-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}.expander-btn[_ngcontent-%COMP%]{color:#fff;font-size:18px;font-weight:700;line-height:6px;width:30px;height:15px;padding:0 6px;background:#457B9D;border-radius:8px;position:absolute;right:0;top:2px;cursor:pointer;z-index:1;opacity:1;letter-spacing:1px}.expander-btn.active[_ngcontent-%COMP%]{opacity:0;z-index:0}.expander-btn[_ngcontent-%COMP%]:before{content:"";padding:15px;width:30px;position:absolute;left:0;top:-50%;z-index:-1;background:transparent}.expander-content[_ngcontent-%COMP%]{display:grid;grid-auto-rows:20px;row-gap:5px;color:#fff;padding:10px;min-width:120px;min-height:60px;box-sizing:border-box;border-radius:8px;box-shadow:0 3px 6px 1px #3c3c3c;background:#457B9D;opacity:0;visibility:hidden;position:absolute;transform:translate3d(-100%,-20px,0);transition:transform .35s ease,opacity .35s ease}.expander-content.active[_ngcontent-%COMP%]{position:absolute;opacity:1;z-index:10;visibility:visible;transform:translate3d(-100%,0,0);transition:transform .35s ease,opacity .35s ease}.expander-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{cursor:pointer}']}),n})();const F=[[["","modalHeader",""]],[["","modalBody",""]],[["","modalFooter",""]]],I=["[modalHeader]","[modalBody]","[modalFooter]"];let O=(()=>{class n{constructor(t){this.windowRef=t,this.close=new e.vpe,this._isActive=!1}set isActive(t){this._isActive=t,this.isActive?this.preventScrolling():this.allowScrolling()}get isActive(){return this._isActive}preventScrolling(){this.windowRef.document.body.style.overflow="hidden"}allowScrolling(){this.windowRef.document.body.style.overflow="unset"}deactivate(){this.isActive=!1,this.close.emit()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36("Window"))},n.\u0275cmp=e.Xpm({type:n,selectors:[["Modal"]],inputs:{isActive:"isActive"},outputs:{close:"close"},standalone:!0,features:[e.jDz],ngContentSelectors:I,decls:7,vars:4,consts:[[1,"modal"],["modalRef",""],[1,"global-backdrop",3,"click"]],template:function(t,o){1&t&&(e.F$t(F),e.TgZ(0,"div",0,1),e.Hsn(2),e.Hsn(3,1),e.Hsn(4,2),e.qZA(),e.TgZ(5,"div",2),e.NdJ("click",function(){return o.deactivate()}),e._UZ(6,"div"),e.qZA()),2&t&&(e.ekj("active",o.isActive),e.xp6(5),e.ekj("active",o.isActive))},dependencies:[a.ez],encapsulation:2}),n})();var p=d(5861),x=d(6179);class k{constructor(r){const t={weight:0,reps:0,...r};this.weight=t.weight,this.reps=t.reps,this.isComplete=!1}}class M{constructor(r){const t={title:"",sets:[],...r};this.title=t.title,this.sets=t.sets.map(o=>new k(o))}}class J{constructor(r){const t={...r};this.date=t.date,this.duration=t.duration}}function y(n){const r=new Date(n.createdDate).valueOf(),t=new Date(n.lastCompletedDate).valueOf();return t>r?t:r}class f{constructor(r){const t={exercises:[],history:[],createdDate:"",lastCompletedDate:"",...r};this.id=t.id,this.title=t.title,this.exercises=t.exercises.map(o=>new M(o)),this.history=t.history.map(o=>new J(o)),this.createdDate=this.getDateOrDefault(t.createdDate),this.lastCompletedDate=this.getDateOrDefault(t.lastCompletedDate)}getDateOrDefault(r){return r?new Date(r).toUTCString():(new Date).toUTCString()}}var P=d(591),z=d(5718);let T=(()=>{class n{constructor(t){this.http=t,this.workouts=[],this.workouts$=new P.X(this.workouts)}get(){var t=this;return(0,p.Z)(function*(){const i=(yield t.http.get("workouts")).workouts.map(s=>new f(s));return t.sortWorkouts(i),t.workouts=i,t.workouts$.next(t.workouts),i})()}getById(t){var o=this;return(0,p.Z)(function*(){return o.workouts.length||(yield o.get()),o.workouts.find(i=>i.id===t)})()}addWorkout(t){var o=this;return(0,p.Z)(function*(){const i=yield o.http.post("workouts",t),s=[...o.workouts,i];o.sortWorkouts(s),o.workouts$.next(s)})()}update(t){var o=this;return(0,p.Z)(function*(){return o.http.put(`workouts/${t.id}`,t)})()}delete(t){var o=this;return(0,p.Z)(function*(){return o.http.delete(`workouts/${t}`)})()}sortWorkouts(t){return t.sort((o,i)=>{const s=y(o);return y(i)-s}),t}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(z.n))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const q=["Expander"];function U(n,r){if(1&n&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.xp6(1),e.Oqu(t.title)}}const B=function(n){return["workout",n]};let A=(()=>{class n{constructor(t){this.workoutsService=t,this.workout=new f,this.formatDate=y}delete(t){var o=this;return(0,p.Z)(function*(){t.stopPropagation(),yield o.workoutsService.delete(o.workout.id),yield o.workoutsService.get(),o.expander?.deactivate()})()}viewHistory(t){t.stopPropagation(),console.log("viewHistory!"),this.expander?.deactivate()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["WorkoutCard"]],viewQuery:function(t,o){if(1&t&&e.Gf(q,5),2&t){let i;e.iGM(i=e.CRH())&&(o.expander=i.first)}},inputs:{workout:"workout"},standalone:!0,features:[e.jDz],decls:17,vars:9,consts:[[1,"wrapper",3,"routerLink"],[1,"expander"],["Expander",""],[3,"click"],[4,"ngFor","ngForOf"],[1,"workout-date"],[3,"isActive","clicked"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"Expander",null,2)(4,"div",3),e.NdJ("click",function(c){return o.viewHistory(c)}),e._uU(5,"View History"),e.qZA(),e.TgZ(6,"div",3),e.NdJ("click",function(c){return o.delete(c)}),e._uU(7,"Delete"),e.qZA()()(),e.TgZ(8,"div")(9,"label"),e._uU(10),e.qZA(),e.TgZ(11,"ul"),e.YNc(12,U,2,1,"li",4),e.qZA()(),e.TgZ(13,"div",5),e._uU(14),e.ALo(15,"date"),e.qZA()(),e.TgZ(16,"Backdrop",6),e.NdJ("clicked",function(){e.CHM(i);const c=e.MAs(3);return e.KtG(c.deactivate())}),e.qZA()}if(2&t){const i=e.MAs(3);e.Q6J("routerLink",e.VKq(7,B,o.workout.id)),e.xp6(10),e.Oqu(o.workout.title),e.xp6(2),e.Q6J("ngForOf",o.workout.exercises),e.xp6(2),e.hij(" ",e.lcZ(15,5,o.formatDate(o.workout))," "),e.xp6(2),e.Q6J("isActive",i.isActive)}},dependencies:[a.ez,a.sg,a.uU,x.Bz,x.rH,v,b],styles:[".wrapper[_ngcontent-%COMP%]{border:1px solid #ccc;border-radius:8px;padding:20px;position:relative}.wrapper[_ngcontent-%COMP%]:active{background:#f5f5f5}.wrapper[_ngcontent-%COMP%]:hover{cursor:pointer}.wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;font-weight:700;display:block;margin-bottom:10px}.wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px;list-style:circle}.wrapper-active[_ngcontent-%COMP%]   .Expander[_ngcontent-%COMP%]{z-index:10}.expander[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px}.workout-date[_ngcontent-%COMP%]{color:#fff;position:absolute;bottom:10px;right:10px;font-size:10px;font-weight:700;background-color:#acc1d7;padding:3px 5px;border-radius:6px}"],changeDetection:0}),n})();const S=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var r=16*Math.random()|0;return("x"===n?r:r&&11).toString(16)});function H(n,r){1&n&&e._UZ(0,"img",3)}let W=(()=>{class n{constructor(){this.selected=!1,this.disabled=!1,this.selectedChange=new e.vpe,this.id=S()}onSelected(){this.disabled||(this.selected=!this.selected,this.selectedChange.emit())}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["Checkbox"]],inputs:{selected:"selected",disabled:"disabled"},outputs:{selectedChange:"selectedChange"},standalone:!0,features:[e.jDz],decls:3,vars:1,consts:[[1,"checkbox",3,"click"],[1,"checkbox-checkmark"],["src","assets/checkmark.png",4,"ngIf"],["src","assets/checkmark.png"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return o.onSelected()}),e.TgZ(1,"div",1),e.YNc(2,H,1,0,"img",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",o.selected))},dependencies:[a.ez,a.O5],encapsulation:2,changeDetection:0}),n})();var L=d(6498),$=d(6688),Y=d(7043),G=d(4850);function C(n,r,t,o){return(0,Y.m)(t)&&(o=t,t=void 0),o?C(n,r,t).pipe((0,G.U)(i=>(0,$.k)(i)?o(...i):o(i))):new L.y(i=>{E(n,r,function s(c){i.next(arguments.length>1?Array.prototype.slice.call(arguments):c)},i,t)})}function E(n,r,t,o,i){let s;if(function V(n){return n&&"function"==typeof n.addEventListener&&"function"==typeof n.removeEventListener}(n)){const c=n;n.addEventListener(r,t,i),s=()=>c.removeEventListener(r,t,i)}else if(function j(n){return n&&"function"==typeof n.on&&"function"==typeof n.off}(n)){const c=n;n.on(r,t),s=()=>c.off(r,t)}else if(function X(n){return n&&"function"==typeof n.addListener&&"function"==typeof n.removeListener}(n)){const c=n;n.addListener(r,t),s=()=>c.removeListener(r,t)}else{if(!n||!n.length)throw new TypeError("Invalid event target");for(let c=0,u=n.length;c<u;c++)E(n[c],r,t,o,i)}o.add(s)}var K=d(7224);let w=(()=>{class n{constructor(){this.currentState=new f,this.state$=new P.X(new f)}watch(){return this.state$.asObservable()}set(t){this.currentState={...this.currentState,...t},this.state$.next(this.currentState)}addExercise(t){const o=new M({title:t});o.sets=[new k];const i=[...this.currentState.exercises,o];this.set({exercises:i})}addSet(t){const o=new k,s=this.currentState.exercises[t],c=s.sets[s.sets.length-1];c&&(o.reps=c.reps,o.weight=c.weight);const u=[...s.sets,o],g={...s,sets:u},h=this.replaceExerciseAtIndex(t,g);this.set({exercises:h})}updateSet(t,o,i){const c=this.currentState.exercises[t],u=c.sets.map((m,ke)=>ke===o?i:m),g={...c,sets:u},h=this.replaceExerciseAtIndex(t,g);this.set({exercises:h})}deleteSet(t,o){const s=this.currentState.exercises[t],c=s.sets.filter((h,m)=>o!==m),u={...s,sets:c},g=this.replaceExerciseAtIndex(t,u);this.set({exercises:g})}removeExercise(t){const i=this.currentState.exercises.filter((s,c)=>t!==c);this.set({exercises:i})}replaceExerciseAtIndex(t,o){return this.currentState.exercises.map((i,s)=>s===t?o:i)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const ee=["ContentWrapper"],te=function(n){return{transform:n}};let ne=(()=>{class n{constructor(t){this.state=t,this.set=new k,this.exerciseIndex=0,this.setIndex=0,this.position=0}ngAfterViewInit(){setTimeout(()=>{this.attachSwipeToDeleteListener()},0)}attachSwipeToDeleteListener(){const t=this.contentWrapperRef?.nativeElement;C(t,"touchstart").subscribe(i=>{let s=i.touches[0].clientX;const c=function o(i,s){for(;(i=i.parentElement)&&!i.classList.contains(s););return i}(i.target,"set"),u=C(t,"touchmove").subscribe(g=>{const m=Math.round(s-g.touches[0].clientX);c.classList.add("active"),m<=0?this.slideBack(c):this.position=m>=50?-80:-m});C(t,"touchend").pipe((0,K.P)()).subscribe(()=>{u.unsubscribe(),Math.abs(this.position)>=80||this.slideBack(c)})})}slideBack(t){if(this.position<0){let o=this.position+2;this.position=o>=0?0:o,requestAnimationFrame(this.slideBack.bind(this,t))}else t.classList.remove("active")}onComplete(){const t={...this.set,isComplete:!this.set.isComplete};this.updateState(t)}onRepsChanged(t){const i={...this.set,reps:parseInt(t.target.value)};this.updateState(i)}onWeightChanged(t){const i={...this.set,weight:parseInt(t.target.value)};this.updateState(i)}delete(){this.state.deleteSet(this.exerciseIndex,this.setIndex)}updateState(t){this.state.updateSet(this.exerciseIndex,this.setIndex,t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["Set"]],viewQuery:function(t,o){if(1&t&&e.Gf(ee,5),2&t){let i;e.iGM(i=e.CRH())&&(o.contentWrapperRef=i.first)}},inputs:{set:"set",exerciseIndex:"exerciseIndex",setIndex:"setIndex"},standalone:!0,features:[e.jDz],decls:13,vars:12,consts:[[1,"set"],["ContentWrapper",""],[1,"set-num"],["type","number",1,"set-input",3,"value","disabled","blur"],[3,"selected","selectedChange"],[1,"set-delete"],[3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0,1)(2,"div",2),e._uU(3),e.qZA(),e.TgZ(4,"div")(5,"input",3),e.NdJ("blur",function(s){return o.onWeightChanged(s)}),e.qZA()(),e.TgZ(6,"div")(7,"input",3),e.NdJ("blur",function(s){return o.onRepsChanged(s)}),e.qZA()(),e.TgZ(8,"div")(9,"Checkbox",4),e.NdJ("selectedChange",function(){return o.onComplete()}),e.qZA()()(),e.TgZ(10,"div",5)(11,"span",6),e.NdJ("click",function(){return o.delete()}),e._uU(12,"Delete"),e.qZA()()),2&t&&(e.Akn(e.VKq(10,te,"translateX("+o.position+"px)")),e.ekj("complete",o.set.isComplete),e.xp6(3),e.Oqu(o.setIndex+1),e.xp6(2),e.Q6J("value",o.set.weight)("disabled",o.set.isComplete),e.xp6(2),e.Q6J("value",o.set.reps)("disabled",o.set.isComplete),e.xp6(2),e.Q6J("selected",o.set.isComplete))},dependencies:[a.ez,_.u5,W],styles:["[_nghost-%COMP%]{position:relative}.set[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 35px;padding:8px 0;transform:translate(0);position:relative;align-items:center;background-color:#fff;z-index:1}.set.active[_ngcontent-%COMP%]{background-color:#f1f1f1}.set[_ngcontent-%COMP%]   input.set-input[_ngcontent-%COMP%], .set[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{height:20px}.set.complete[_ngcontent-%COMP%]{background:#cef0ce}.set.complete[_ngcontent-%COMP%]   input.set-input[_ngcontent-%COMP%]{background:transparent;border:1px solid rgba(127,171,127,.4509803922);color:#7fab7f73;height:20px}.set-num[_ngcontent-%COMP%]{padding-left:14px}.set-delete[_ngcontent-%COMP%]{position:absolute;width:80px;right:0;top:0;bottom:0;background:rgb(222,91,91);display:grid;align-items:center;z-index:0;box-shadow:inset 2px 0 4px #642020;text-align:center}.set-delete[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px;color:#fff;font-weight:700}"]}),n})();const oe=["Expander"];function ie(n,r){if(1&n&&e._UZ(0,"Set",12),2&n){const t=r.$implicit,o=r.index,i=e.oxw();e.Q6J("set",t)("exerciseIndex",i.exerciseIndex)("setIndex",o)}}let re=(()=>{class n{constructor(t){this.state=t,this.exercise=new M,this.exerciseIndex=0}remove(){this.state.removeExercise(this.exerciseIndex)}addSet(){this.state.addSet(this.exerciseIndex)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ExerciseCard"]],viewQuery:function(t,o){if(1&t&&e.Gf(oe,5),2&t){let i;e.iGM(i=e.CRH())&&(o.expanderRef=i.first)}},inputs:{exercise:"exercise",exerciseIndex:"exerciseIndex"},standalone:!0,features:[e.jDz],decls:24,vars:5,consts:[[1,"exercise-wrapper"],[1,"exercise-title-wrapper"],[1,"exercise-title"],["Expander",""],[3,"click"],[1,"exercise-set-wrapper"],[1,"exercise-sets-header"],[3,"selected","disabled"],[1,"exercise-sets"],[3,"set","exerciseIndex","setIndex",4,"ngFor","ngForOf"],[1,"AddSetBtn",3,"click"],[3,"isActive","clicked"],[3,"set","exerciseIndex","setIndex"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3),e.qZA(),e.TgZ(4,"Expander",null,3)(6,"span",4),e.NdJ("click",function(){return o.remove()}),e._uU(7,"Remove"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div"),e._uU(11,"Set"),e.qZA(),e.TgZ(12,"div"),e._uU(13,"lbs"),e.qZA(),e.TgZ(14,"div"),e._uU(15,"Reps"),e.qZA(),e.TgZ(16,"div"),e._UZ(17,"Checkbox",7),e.qZA()(),e.TgZ(18,"div",8),e.YNc(19,ie,1,3,"Set",9),e.qZA()(),e.TgZ(20,"div",10),e.NdJ("click",function(){return o.addSet()}),e.TgZ(21,"span"),e._uU(22,"Add Set"),e.qZA()()(),e.TgZ(23,"Backdrop",11),e.NdJ("clicked",function(){e.CHM(i);const c=e.MAs(5);return e.KtG(c.deactivate())}),e.qZA()}if(2&t){const i=e.MAs(5);e.xp6(3),e.hij(" ",o.exercise.title," "),e.xp6(14),e.Q6J("selected",!0)("disabled",!0),e.xp6(2),e.Q6J("ngForOf",o.exercise.sets),e.xp6(4),e.Q6J("isActive",i.isActive)}},dependencies:[a.ez,a.sg,W,b,ne,v],styles:[".exercise-title[_ngcontent-%COMP%]{color:#0093ff}.exercise-set-wrapper[_ngcontent-%COMP%]{margin-bottom:20px}.exercise-sets-header[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr 35px;margin:10px 0}.exercise-sets-header[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:25px}.exercise-title-wrapper[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;font-size:16px;margin-bottom:20px}.exercise-sets[_ngcontent-%COMP%]{display:grid;row-gap:3px}.AddSetBtn[_ngcontent-%COMP%]{display:flex;justify-content:center;background:rgb(213,213,213);border-radius:8px;font-size:14px;padding:3px}"]}),n})();const l="https://static.thenounproject.com/png/1365947-200.png",se=[{title:"Pull Ups",image:l},{title:"Bench Press",image:l},{title:"Inclinde Bench",image:l},{title:"Barbel Squat",image:l},{title:"Incline Press",image:l},{title:"Bulgarian Squat",image:l},{title:"Deadlift",image:l},{title:"Romanian Deadlift",image:l},{title:"Straight Leg Deadlift",image:l},{title:"Barbel Curl",image:l},{title:"Hip Thrusts",image:l},{title:"Lat Pulldown",image:l},{title:"Bent Over Rows",image:l},{title:"Chest Fly",image:l},{title:"Tricep Extension",image:l},{title:"Bicep Curl",image:l},{title:"Lateral Raise",image:l},{title:"Dips",image:l}];function ce(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",6),e.NdJ("click",function(){const s=e.CHM(t).$implicit,c=e.oxw(2);return e.KtG(c.select(s))}),e._UZ(2,"img",7),e.TgZ(3,"label"),e._uU(4),e.qZA()(),e.BQk()}if(2&n){const t=r.$implicit;e.xp6(2),e.Q6J("src",t.image,e.LSH),e.xp6(2),e.Oqu(t.title)}}function ae(n,r){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"div",1)(2,"div",2)(3,"h4"),e._uU(4,"Pick a Exercise"),e.qZA(),e.TgZ(5,"div",3),e.YNc(6,ce,5,2,"ng-container",4),e.qZA()(),e.TgZ(7,"div",5),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.close())}),e.qZA()(),e.BQk()}if(2&n){const t=e.oxw();e.xp6(6),e.Q6J("ngForOf",t.exercises)}}let le=(()=>{class n{constructor(t){this.windowRef=t,this.closed=new e.vpe,this.selected=new e.vpe,this._isOpen=!1,this.exercises=se}set isOpen(t){this._isOpen=t,this.isOpen?this.preventScrolling():this.allowScrolling()}get isOpen(){return this._isOpen}preventScrolling(){this.windowRef.document.body.style.overflow="hidden"}allowScrolling(){this.windowRef.document.body.style.overflow="unset"}close(){this.closed.emit()}select(t){this.selected.emit(t),this.close()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36("Window"))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-exercise-picker"]],inputs:{isOpen:"isOpen"},outputs:{closed:"closed",selected:"selected"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"exercise-picker"],[1,"exercise-picker-content"],[1,"exercise-picker-list"],[4,"ngFor","ngForOf"],[1,"exercise-picker-backdrop",3,"click"],[1,"exercise-picker-list-item",3,"click"],["alt","workout",3,"src"]],template:function(t,o){1&t&&e.YNc(0,ae,8,1,"ng-container",0),2&t&&e.Q6J("ngIf",o.isOpen)},dependencies:[a.ez,a.sg,a.O5],styles:[".exercise-picker[_ngcontent-%COMP%]{position:fixed;display:flex;justify-content:center;align-items:center;inset:0;z-index:1}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-content[_ngcontent-%COMP%]{margin-bottom:1rem;width:90vw;min-width:300px;max-width:500px;min-height:300px;background:white;border-radius:8px;padding:30px;animation:SlideInFromBottom .3s ease-in-out;z-index:1;box-sizing:border-box}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:10px}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]{height:300px;border-top:1px solid #d5d5d5;border-bottom:1px solid #d5d5d5;overflow-y:scroll}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]   .exercise-picker-list-item[_ngcontent-%COMP%]{display:flex;column-gap:10px;align-items:center;padding:5px 0}.exercise-picker[_ngcontent-%COMP%]   .exercise-picker-list[_ngcontent-%COMP%]   .exercise-picker-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}@keyframes SlideInFromBottom{0%{transform:translateY(100px)}to{transform:translateY(0)}}.exercise-picker-backdrop[_ngcontent-%COMP%]{position:absolute;inset:0;background:rgba(0,0,0,.5)}"]}),n})(),de=(()=>{class n{constructor(){this._time=0,this._startTime=0}get formattedTime(){return(n=>{let o="0";n>=60&&(o=Math.floor(n/3600),n-=3600*o);const i=function N(n){if(n>=60){let r=Math.floor(n/60),t=n%60;return t=t<10?`0${t}`:t,r=r<10?`0${r}`:r,`${r}:${t}`}return n<10?`00:0${n}`:`00:${n}`}(n);return o+":"+i})(this._time)}ngOnInit(){this._startTime=(new Date).valueOf(),this._interval=setInterval(()=>{this._time=(n=>Math.round(((new Date).valueOf()-n)/1e3))(this._startTime)},200)}ngOnDestroy(){clearInterval(this._interval)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["Timer"]],standalone:!0,features:[e.jDz],decls:2,vars:1,consts:[[1,"timer"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e._uU(1),e.qZA()),2&t&&(e.xp6(1),e.Oqu(o.formattedTime))},encapsulation:2}),n})();const pe=["TimerAnchor"],ue=["ScrollingTimerRef"];function ge(n,r){if(1&n&&(e.TgZ(0,"div",16),e._UZ(1,"ExerciseCard",17),e.qZA()),2&n){const t=r.$implicit,o=r.index;e.xp6(1),e.Q6J("exercise",t)("exerciseIndex",o)}}let me=(()=>{class n{constructor(t,o,i,s){this.router=t,this.workoutService=o,this.state=i,this.routing=s,this.workout=new f,this.timerAnchor=null,this.timerRef=null,this.isChoosingExercise=!1}ngOnInit(){this.state.watch().subscribe(t=>this.workout=t),this.router.paramMap.subscribe(t=>{const o=t.get("id");o&&this.getWorkout(o)})}ngAfterViewInit(){setTimeout(()=>this.initObserver(),1)}initObserver(){this.timerAnchor&&this.timerRef&&new IntersectionObserver(i=>{const c=this.timerRef?.nativeElement;i[0].isIntersecting?c.classList.remove("show"):c.classList.add("show")}).observe(this.timerAnchor.nativeElement)}complete(){var t=this;return(0,p.Z)(function*(){t.workout.lastCompletedDate=(new Date).toUTCString(),yield t.workoutService.update(t.workout),t.routing.navigate([""])})()}cancel(){var t=this;return(0,p.Z)(function*(){yield t.workoutService.update(t.workout),t.routing.navigate([""])})()}addExercise(t){this.state.addExercise(t.title)}openExercisePicker(){this.isChoosingExercise=!0}getWorkout(t){var o=this;return(0,p.Z)(function*(){const i=yield o.workoutService.getById(t);o.state.set(i)})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(x.gz),e.Y36(T),e.Y36(w),e.Y36(x.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-workout-detail"]],viewQuery:function(t,o){if(1&t&&(e.Gf(pe,5),e.Gf(ue,5)),2&t){let i;e.iGM(i=e.CRH())&&(o.timerAnchor=i.first),e.iGM(i=e.CRH())&&(o.timerRef=i.first)}},inputs:{workout:"workout"},standalone:!0,features:[e._Bn([w]),e.jDz],decls:23,vars:3,consts:[[1,"workout-detail"],[1,"workout-detail-header"],[3,"click"],[1,"secondary",3,"click"],[1,"workout-detail-title"],[1,"workout-detail-timer"],["TimerRef",""],[1,"workout-detail-scrolling-timer"],["ScrollingTimerRef",""],[1,"workout-detail-timer-wrapper"],["TimerAnchor",""],[1,"workout-detail-exercises"],["class","workout-detail-exercise",4,"ngFor","ngForOf"],[1,"workout-detail-add-exercise"],[1,"pill-button--blue",3,"click"],[3,"isOpen","closed","selected"],[1,"workout-detail-exercise"],[3,"exercise","exerciseIndex"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return o.complete()}),e._uU(3,"Finish"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return o.cancel()}),e._uU(5,"Cancel"),e.qZA()(),e.TgZ(6,"div",4)(7,"h2"),e._uU(8),e.qZA()(),e.TgZ(9,"div",5,6),e._UZ(11,"Timer"),e.qZA(),e.TgZ(12,"div",7,8),e._UZ(14,"Timer"),e.qZA(),e._UZ(15,"div",9,10),e.TgZ(17,"div",11),e.YNc(18,ge,2,2,"div",12),e.qZA(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){return o.openExercisePicker()}),e._uU(21,"Add Exercise"),e.qZA()()(),e.TgZ(22,"app-exercise-picker",15),e.NdJ("closed",function(){return o.isChoosingExercise=!1})("selected",function(s){return o.addExercise(s)}),e.qZA()),2&t&&(e.xp6(8),e.Oqu(o.workout.title),e.xp6(10),e.Q6J("ngForOf",o.workout.exercises),e.xp6(4),e.Q6J("isOpen",o.isChoosingExercise))},dependencies:[a.ez,a.sg,re,le,de],styles:[".workout-detail[_ngcontent-%COMP%]{display:grid;padding:20px 20px 50px}.workout-detail-scrolling-timer[_ngcontent-%COMP%]{visibility:hidden;position:fixed;top:4vh;right:20px;z-index:-1;background:#444;padding:8px;border-radius:8px}.workout-detail-scrolling-timer.show[_ngcontent-%COMP%]{visibility:visible;z-index:2}.workout-detail-scrolling-timer[_ngcontent-%COMP%]     .timer{font-size:20px;color:#fff}.workout-detail-timer[_ngcontent-%COMP%]{margin-bottom:20px}@keyframes MakeSmall{0%{transform:scale(1)}to{transform:scale(.5);width:auto}}.workout-detail-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#444;margin-bottom:5px}.workout-detail-header[_ngcontent-%COMP%]{display:flex;column-gap:10px;margin-bottom:40px;justify-content:space-between;align-items:center}.workout-detail-exercises[_ngcontent-%COMP%]{display:grid;overflow:hidden}.workout-detail-exercises[_ngcontent-%COMP%]   .workout-detail-exercise[_ngcontent-%COMP%]{margin-bottom:50px}.workout-detail-exercises[_ngcontent-%COMP%]   .workout-detail-exercise[_ngcontent-%COMP%]:last-child{margin-bottom:20px}.ModalContentTitle[_ngcontent-%COMP%], .FinishModalTitle[_ngcontent-%COMP%]{display:block;font-weight:700;margin-bottom:20px}.FinishModalActions[_ngcontent-%COMP%]{display:grid;row-gap:10px}.workout-detail-add-exercise[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}"]}),n})();function xe(n,r){1&n&&e._UZ(0,"WorkoutCard",10),2&n&&e.Q6J("workout",r.$implicit)}const fe=[{path:"",component:(()=>{class n{constructor(t){this.workoutsService=t,this.workouts=[],this.isActive=!1,this.newWorkoutTitle=""}ngOnInit(){var t=this;return(0,p.Z)(function*(){yield t.workoutsService.get(),t.workoutsService.workouts$.subscribe(o=>{t.workouts=o})})()}openModal(){this.isActive=!0}closeModal(){this.isActive=!1,this.newWorkoutTitle=""}createWorkout(){var t=this;return(0,p.Z)(function*(){const o=new f;o.title=t.newWorkoutTitle,o.id=S(),yield t.workoutsService.addWorkout(o),t.closeModal()})()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-workouts"]],decls:20,vars:3,consts:[[1,"wrapper"],[1,"start-cta"],[3,"click"],[1,"workout-section"],[3,"workout",4,"ngFor","ngForOf"],[3,"isActive","close"],["modalBody","",1,"new-workout"],["type","text",1,"standard",3,"ngModel","ngModelChange"],[1,"new-workout-btns"],[1,"link-button",3,"click"],[3,"workout"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2,"Workout Tracker"),e.qZA(),e.TgZ(3,"div",1)(4,"button",2),e.NdJ("click",function(){return o.openModal()}),e._uU(5,"Start New Workout"),e.qZA()(),e.TgZ(6,"div",3)(7,"h3"),e._uU(8,"Workouts"),e.qZA(),e.YNc(9,xe,1,1,"WorkoutCard",4),e.qZA(),e.TgZ(10,"Modal",5),e.NdJ("close",function(){return o.closeModal()}),e.TgZ(11,"div",6)(12,"label"),e._uU(13,"Name your workout: "),e.qZA(),e.TgZ(14,"input",7),e.NdJ("ngModelChange",function(s){return o.newWorkoutTitle=s}),e.qZA(),e.TgZ(15,"div",8)(16,"button",2),e.NdJ("click",function(){return o.createWorkout()}),e._uU(17," Create "),e.qZA(),e.TgZ(18,"button",9),e.NdJ("click",function(){return o.closeModal()}),e._uU(19," Cancel "),e.qZA()()()()()),2&t&&(e.xp6(9),e.Q6J("ngForOf",o.workouts),e.xp6(1),e.Q6J("isActive",o.isActive),e.xp6(4),e.Q6J("ngModel",o.newWorkoutTitle))},dependencies:[a.sg,_.Fj,_.JJ,_.On,O,A],styles:[".wrapper[_ngcontent-%COMP%]{padding:20px}.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:30px}.start-cta[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.workout-section[_ngcontent-%COMP%]{display:grid;row-gap:1em;column-gap:2em}.workout-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-bottom:10px}.add-workout[_ngcontent-%COMP%]{display:grid;row-gap:1em}.add-workout[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:48px;border-radius:6px;outline:none;border:1px solid gray;padding-left:8px;box-sizing:border-box;color:#333;font-size:15px;font-weight:700}.new-workout[_ngcontent-%COMP%]{display:grid;row-gap:10px}.new-workout[_ngcontent-%COMP%]   .new-workout-btns[_ngcontent-%COMP%]{margin-top:5px;display:grid;row-gap:10px}"]}),n})()},{path:"workout/:id",component:me}];let he=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[x.Bz.forChild(fe),x.Bz]}),n})(),_e=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.ez,_.u5,b,v,O,A,he]}),n})()}}]);