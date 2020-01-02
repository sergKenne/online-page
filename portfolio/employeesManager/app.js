var firebaseConfig =  {
	apiKey: "AIzaSyAi5uUBAii1Z5gli5Y5cKdORR6f4IIjtn8",
    authDomain: "vuefs-prod-d70e7.firebaseapp.com",
    databaseURL: "https://vuefs-prod-d70e7.firebaseio.com",
    projectId: "vuefs-prod-d70e7",
    storageBucket: "vuefs-prod-d70e7.appspot.com",
    messagingSenderId: "622591689516",
    appId: "1:622591689516:web:8e25a2e1ca8fd0c2e52289",
    measurementId: "G-2YLTZ3XBN1"
};

firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();




const Navbar = {
	template: ` 
		<nav>
		  	<div class="nav-wrapper green">
		  		<div class="container">
		  			<router-link to="/" class="brand-logo">Employee manager</router-link>
		        
		  		</div>
		  	</div>
		</nav>
	`,
	data() {
		return {

		}
	}
}

const Home = { 
	template: ` 
		<div id="dashboard">
		    <ul class="collection with-header">
		      <li class="collection-header"><h4>Employees</h4></li>
		      <li v-for="employee in employees"  :key="employee.id"class="collection-item">
		        <div class="chip">{{ employee.dept}}</div>
		        {{employee.employee_id}} : {{employee.name}}
		        <router-link class="secondary-content" v-bind:to="{ name: 'view-employee', params: {employee_id: employee.employee_id}}"><i class="fa fa-eye"></i></router-link>
		      </li>
		    </ul>
		    <div class="fixed-action-btn">
		      <router-link to="/new" class="btn-floating btn-large waves-effect waves-light red">
		        <i class="fa fa-plus"></i>
		      </router-link>
		    </div>
		</div>
	`,
	data () {
	    return {
	      employees: []
	    }
	},
	created() {
	    db.collection("employees").orderBy('dept').get().then( querySnapshot => {
	        this.loading = false
	        querySnapshot.forEach( doc => {
	          const data = {
	            "id":doc.id,
	            "employee_id": doc.data().employee_id,
	            "name": doc.data().name,
	            "dept": doc.data().dept,
	            "position": doc.data().position
	          }

	          this.employees.push(data)
	        } )
	    })
	}
}

const ViewEmployee = {
	template: ` 
		<div id="view-employee" class="container">
		    <ul class="collection with-header">
		    	<li class="collection-header"><h4>{{ name }}</h4></li>
		    	<li class="collection-item">Employee ID#: {{employee_id}}</li>
		    	<li class="collection-item">Department: {{dept}}</li>
		    	<li class="collection-item">Position: {{position}}</li>
		    </ul>
		    <router-link to="/" class="btn grey">Back</router-link>
		    <button @click="deleteEmployee" class="btn red">Delete</button>

		    <div class="fixed-action-btn">
		      <router-link v-bind:to="{ name: 'edit-employee', params: { employee_id: employee_id }}" class="btn-floating btn-large red">
		        <i class="fa fa-pencil"></i>
		      </router-link>
		    </div>
		</div>
	`,
	data () {
	    return {
	      employee_id: null,
	      name: null,
	      dept: null,
	      position: null
	    }
	},
	beforeRouteEnter(to, from, next) {
	  	db.collection("employees").where("employee_id", "==", to.params.employee_id)
	  	.get().then( (querySnapshot) => {
	  		querySnapshot.forEach( (doc) => {
	  			next( vm => {
	  				vm.employee_id = doc.data().employee_id
	  				vm.name = doc.data().name
	  				vm.dept = doc.data().dept
	  				vm.position = doc.data().position
	  			})
	  		})
	  	})
	},
	watch:{
	  	'$route' : 'fetchData'
	},
	methods: {
	  	fetchData() {
	  		db.collection("employees").where("employee_id", "==", this.$route.params.employee_id)
		  	.get().then( (querySnapshot) => {
		  		querySnapshot.forEach( (doc) => {
		  			this.employee_id = doc.data().employee_id
		  			this.name = doc.data().name
		  			this.dept= doc.data().dept
		  			this.position = doc.data().position
		  		})
		  	})
	  	},
	  	deleteEmployee() { 
	  		if( confirm('Are you sure? ')) {
	  			db.collection('employees').where('employee_id', '==', this.$route.params.employee_id)
	  			.get().then( (querySnapshot) => {
	  				querySnapshot.forEach( doc => {
	  					doc.ref.delete();
	  					this.$router.push('/')
	  				})
	  			})
	  		}
	  	}
	}
}

const NewEmployee = {
	template: ` 
		<div id="new-employee">
		    <h3>New Employee</h3>
		    <div class="row">
		    	<form @submit.prevent="saveEmployee" class="col s12">
		    		<div class="row">
		    			<div class="input-field col s12">
		    				<input type="text" v-model="employee_id" required>
		    				<label>Employee ID#</label>
		    			</div>
		    		</div>
		    		<div class="row">
		    			<div class="input-field col s12">
		    				<input type="text" v-model="name" required>
		    				<label>Name</label>
		    			</div>
		    		</div>
		    		<div class="row">
		    			<div class="input-field col s12">
		    				<input type="text" v-model="dept" required>
		    				<label>Department</label>
		    			</div>
		    		</div>
		    		<div class="row">
		    			<div class="input-field col s12">
		    				<input type="text" v-model="position" required>
		    				<label>Position</label>
		    			</div>
		    		</div>
		    		<button type="submit" class="btn">Submit</button>
		    		<router-link to="/" class="btn grey">Cancel</router-link>
		    	</form>
		    </div>
		</div>
	`,
	data () {

	    return {
	      employee_id: null,
	      name: null,
	      dept: null,
	      position: null
	    }
	},
	methods: {
	  	saveEmployee() {
	  		db.collection('employees').add({
	  			employee_id: this.employee_id,
	  			name: this.name,
	  			dept: this.dept,
	  			position: this.position
	  		})
	  		.then(docRef => {
	  			this.$router.push('/')
	  		})
	  		.catch( error => {
	  			console.error('Error adding employee: ', error)
	  		})
	  	}
	}
}


const EditEmployee = {
	template: ` 
		<div id="edit-employee">
		    <h3>Edit Employee</h3>
		    <div class="row">
		      <form @submit.prevent="updateEmployee" class="col s12">
		        <div class="row">
		          <div class="input-field col s12">
		            <input type="text" v-model="employee_id" required>
		          </div>
		        </div>
		        <div class="row">
		          <div class="input-field col s12">
		            <input type="text" v-model="name" required>
		          </div>
		        </div>
		        <div class="row">
		          <div class="input-field col s12">
		            <input type="text" v-model="dept" required>
		          </div>
		        </div>
		        <div class="row">
		          <div class="input-field col s12">
		            <input type="text" v-model="position" required>
		          </div>
		        </div>
		        <button type="submit" class="btn">Submit</button>
		        <router-link to="/" class="btn grey">Cancel</router-link>
		      </form>
		    </div>
		</div>
	`,
	data () {
	    return {
	      employee_id: null,
	      name: null,
	      dept: null,
	      position: null
	    }
	},
	beforeRouteEnter (to, from, next) {
	    db.collection('employees').where('employee_id', '==', to.params.employee_id).get().then((querySnapshot) => {
	      querySnapshot.forEach((doc) => {
	        next(vm => {
	          vm.employee_id = doc.data().employee_id
	          vm.name = doc.data().name
	          vm.dept = doc.data().dept
	          vm.position = doc.data().position
	        })
	      })
	    })
	},
	watch: {
	    '$route': 'fetchData'
	},
 	methods: {
    	fetchData () {
	      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
	        querySnapshot.forEach((doc) => {
	          this.employee_id = doc.data().employee_id
	          this.name = doc.data().name
	          this.dept = doc.data().dept
	          this.position = doc.data().position
	        })
	      })
    	},
	    updateEmployee () {
	      db.collection('employees').where('employee_id', '==', this.$route.params.employee_id).get().then((querySnapshot) => {
	        querySnapshot.forEach((doc) => {
	          doc.ref.update({
	            employee_id: this.employee_id,
	            name: this.name,
	            dept: this.dept,
	            position: this.position
	          })
	          .then(() => {
	            this.$router.push({ name: 'view-employee', params: { employee_id: this.employee_id }})
	          });
	        })
	      })
	    }
    }
}



const router = new VueRouter({
  routes: [
  	{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    
  ]
})


new Vue({
	el: "#app",
	router,
	components: {
		Navbar
	},
	data: function() {
		return {

		}
	},

})