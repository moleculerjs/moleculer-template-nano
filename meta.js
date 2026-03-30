"use strict";

module.exports = function(values) {
	return {
		questions: [
			{
				type: "list",
				name: "transporter",
				message: "Select a transporter",
				choices: [
					{ name: "TCP", value: "TCP" },
					{ name: "NATS", value: "NATS" },
					{ name: "MQTT", value: "MQTT" },
					{ name: "AMQP", value: "AMQP" },
					{ name: "Redis", value: "Redis" },
					{ name: "Kafka", value: "Kafka" }
				],
				default: "TCP"
			},
			{
				type: "confirm",
				name: "needCacher",
				message: "Would you like use cache?",
				default: false
			},
			{
				type: "list",
				name: "cacher",
				message: "Select a cacher solution",
				choices: [
					{ name: "Memory", value: "Memory" },
					{ name: "Redis", value: "Redis" }
				],
				when(answers) { return answers.needCacher; },
				default: "Memory"
			},
			{
				type: "confirm",
				name: "metrics",
				message: "Would you like to enable metrics?",
				default: true
			},
			{
				type: "confirm",
				name: "tracing",
				message: "Would you like to enable tracing?",
				default: true
			},
			{
				type: "confirm",
				name: "docker",
				message: "Add Docker & Docker Compose files?",
				default: true
			},
			{
				type: "confirm",
				name: "lint",
				message: "Use ESLint to lint your code?",
				default: true
			}
		],

		metalsmith: {
			before(metalsmith) {
				const data = metalsmith.metadata();
				data.needTransporter = !! data.transporter;
				data.redis = data.cacher == "Redis" || data.transporter == "Redis";
				data.hasDepends = (data.needCacher && data.cacher !== "Memory") || (data.needTransporter && data.transporter != "TCP");
			}
		},

		"filters": {
			"eslint.config.js": "lint",
			".dockerignore": "docker",
			"docker-compose.*": "docker",
			"Dockerfile": "docker",
			"docker-compose.env": "docker"
		},

		completeMessage: `
To get started:

	cd {{projectName}}
	npm run dev

		`
	};
};
