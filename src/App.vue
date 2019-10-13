<template>
	<div id="app" class="bg-gray-200 pb-10">
		<h1 class="text-4xl text-center py-10 capitalize">
			markdown previewer
		</h1>
		<p class="text-gray-700 mb-10 text-center">
			Enter your markdown code to see an HTML preview below.
		</p>
		<div class="container">
			<div class="input">
				<textarea
					name="editor"
					id="editor"
					cols="60"
					rows="10"
					v-model="input"
					@keyup="getMarkdown"
					class="border rounded mx-auto block no-focus p-6"
				></textarea>
			</div>
			<div class="output border border-gray-700 rounded mt-10 w-full">
				<div id="preview" ref="preview" class="p-10"></div>
				<hr />
				<div class="text-center">
					<p>App made with Vue.js</p>
					<img src="./assets/logo.png" alt="vue logo" class="block mx-auto" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				input:
					"# Hello world! \n ## subheading \n ### sub heading * 3 \n `<div>code</div>` \n\n ``` \n\n function() {console.log('multiline')} \n\n  \n\n ``` \n\n ***bold*** \n\n _italic_ \n\n ~~cross out~~ \n\n (https://www.freecodecamp.com) \n\n > Block Quote \n\n 1. list item \n\n ![Vue Logo](./assets/logo.png)"
			};
		},
		mounted() {
			this.$refs.preview.innerHTML = marked(this.input);
		},
		methods: {
			getMarkdown() {
				this.$refs.preview.innerHTML = marked(this.input, {
					breaks: true
				});
			}
		}
	};
</script>
