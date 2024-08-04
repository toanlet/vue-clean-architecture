<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<ul>
		<li><router-link to="/customer-list"> Customer List</router-link></li>
		<li><router-link to="/add-customer"> Customer Add</router-link></li>
	</ul>
	<RouterView />
</template>
