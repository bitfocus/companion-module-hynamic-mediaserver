// Basic feedbacks implementation
// This allows users to create visual feedback based on device state

const feedbacks = {
	/**
	 * Get all available feedbacks
	 * @param {*} instance - The module instance
	 * @returns {Object} Available feedbacks
	 */
	getFeedbacks(instance) {
		const feedbacks = {}

		feedbacks['program_active'] = {
			type: 'boolean',
			name: 'Program Active',
			description: 'Indicates if a specific program is currently active',
			defaultStyle: {
				bgcolor: instance.rgb(255, 0, 0),
				color: instance.rgb(255, 255, 255),
			},
			options: [
				{
					type: 'number',
					label: 'Program Number',
					id: 'program',
					default: 1,
					min: 1,
					max: 256,				},
			],
			callback: (feedback) => {
				// Return true if the specified program is active
				return instance.programId === feedback.options.program - 1
			},
		}

		feedbacks['connection_status'] = {
			type: 'boolean',
			name: 'Connection Status',
			description: 'Shows connection status to the device',
			defaultStyle: {
				bgcolor: instance.rgb(0, 255, 0),
				color: instance.rgb(0, 0, 0),
			},
			options: [],
			callback: () => {
				// Return true if connected
				return instance.udp && instance.udp.isConnected
			},
		}

		return feedbacks
	},
}

module.exports = feedbacks
