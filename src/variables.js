// Variables implementation
// This allows the module to expose dynamic data as variables

const variables = {
	/**
	 * Initialize variables
	 * @param {*} instance - The module instance
	 */
	initVariables(instance) {
		const variableDefinitions = [
			{
				name: 'Current Program',
				variableId: 'current_program',
			},
			{
				name: 'Connection Status',
				variableId: 'connection_status',
			},
			{
				name: 'Device IP',
				variableId: 'device_ip',
			},
		]

		instance.setVariableDefinitions(variableDefinitions)

		// Set initial values
		instance.setVariableValues({
			current_program: instance.programId + 1 || 1,
			connection_status: 'Disconnected',
			device_ip: instance.config.host || 'Unknown',
		})
	},

	/**
	 * Update variables
	 * @param {*} instance - The module instance
	 */
	updateVariables(instance) {
		const values = {
			current_program: instance.programId + 1 || 1,
			connection_status: instance.udp && instance.udp.isConnected ? 'Connected' : 'Disconnected',
			device_ip: instance.config.host || 'Unknown',
		}

		instance.setVariableValues(values)
	},
}

module.exports = variables
