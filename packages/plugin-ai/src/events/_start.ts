import { setEngine } from '@/core/ai.js'
import { logger } from '@/core/logger.js'
import { OpenAiEngine } from '@/engines/openai/engine.js'
import { Client } from 'discord.js'
import type { BaseEngine } from '@/engines/base.js'

export interface PluginOptions {
	commands?: boolean | string[]
	engine?: BaseEngine
	maxTokens?: number
	model?: string
	systemMessage?: string
	whitelist?: {
		channelIds: string[]
	}
}

export let options: PluginOptions

/**
 * Converts all portal commands into GPT functions for later use
 */
export default (_client: Client, pluginOptions: PluginOptions) => {
	options = pluginOptions

	// OpenAI is the default engine for now
	if (!options.engine) {
		options.engine = new OpenAiEngine()
	}
	setEngine(options.engine)

	// Prepare the AI engine in the background
	logger.debug('Initializing AI engine...')
	options.engine.init().then(() => {
		logger.debug('AI engine is ready!')
	})
}
