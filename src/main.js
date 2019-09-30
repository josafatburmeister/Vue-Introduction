import Vue from 'vue'
import App from './App'

import NotFound from './components/NotFound'

import Directive from './components/1_Directives/Directives'
import VBind from './components/1_Directives/VBind'
import VOn from './components/1_Directives/VOn'
import VIf from './components/1_Directives/VIf'
import VShow from './components/1_Directives/VShow'
import VFor from './components/1_Directives/VFor'
import DirectivesExercise from './components/1_Directives/DirectivesExercise'

import Templates from './components/2_Templates/Templates'
import TemplatesExercise from './components/2_Templates/TemplatesExercise'

import Component from './components/3_Components/Component'
import Properties from './components/3_Components/1_Properties/Properties'
import ComputedProperties from './components/3_Components/1_Properties/ComputedProperties'
import PropertiesExercise from './components/3_Components/1_Properties/PropertiesExercise'
import EventHandling from './components/3_Components/2_EventHandling/EventHandling'
import EventHandlingExercise from './components/3_Components/2_EventHandling/EventHandlingExercise'
import Slots from './components/3_Components/3_Slots/Slots'

import DynamicComponents from './components/3_Components/4_DynamicComponents/DynamicComponents'

import ClassBindings from './components/4_ClassBindings/ClassBindings'


const routes = {
  '/': App,
  '/directives/': Directive,
  '/directives/v-bind/': VBind,
  '/directives/v-on/': VOn,
  '/directives/v-if/': VIf,
  '/directives/v-show/': VShow,
  '/directives/v-for/': VFor,
  '/directives/exercise/': DirectivesExercise,
  '/templates/': Templates,
  '/templates/exercise/': TemplatesExercise,
  '/components/': Component,
  '/components/properties/': Properties,
  '/components/computedProperties/': ComputedProperties,
  '/components/properties/exercise': PropertiesExercise,
  '/components/slots/': Slots,
  '/components/eventHandling/': EventHandling,
  '/components/eventHandling/exercise/': EventHandlingExercise,
  '/components/dynamicComponents/': DynamicComponents,
  '/classbindings/': ClassBindings,
}

Vue.config.productionTip = false

const vm = new Vue({
	components: { App },
	data: {
		currentRoute: window.location.pathname
	},
	computed: {
		ViewComponent () {
			return routes[this.currentRoute] || routes[`${this.currentRoute}/`] || NotFound
		}
	},
    render(createElement) { return createElement(this.ViewComponent) },
}).$mount('#app')

vm.$el === document.getElementById('app') // should be true
vm.$watch = function() {
	alert('Something has changed.');
}