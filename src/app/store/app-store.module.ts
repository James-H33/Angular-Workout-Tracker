import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { AppStateFeature } from "./app.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AppStateEffects } from "./app.effects";

@NgModule({
  imports: [
    StoreModule.forFeature(AppStateFeature),
    EffectsModule.forFeature(AppStateEffects)
  ],
})
export class AppStateModule {}
