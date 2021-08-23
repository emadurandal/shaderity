import {
	ShaderExtensionBehavior,
	ShaderExtensionObject,
	ShaderityObject,
	ShaderStageStr
} from '../types/type';

/**
 * This class creates a shaderity object.
 */
export default class ShaderityObjectCreator {
	private __shaderStage: ShaderStageStr;

	// define directive
	private __extensions: ShaderExtensionObject[] = [];
	// global precision
	// global constant value
	// attribute declaration (for vertex shader)
	// varying declaration
	// uniform declaration
	// uniform structure declaration
	// functions
	// main function

	constructor(shaderStage: ShaderStageStr) {
		this.__shaderStage = shaderStage;
	}

	public addExtension(extensionName: string, behavior: ShaderExtensionBehavior = 'require') {
		const isDuplicate =
			this.__extensions.some(extension => extension.extensionName === extensionName);
		if (isDuplicate) {
			console.warn('addExtension: this extension is already set');
			return;
		}

		this.__extensions.push({
			extensionName,
			behavior
		});
	}

	public createShaderityObject(): ShaderityObject {
		const shaderityObj = {
			code: this.__createShaderCode(),
			shaderStage: this.__shaderStage,
			isFragmentShader: this.__shaderStage === 'fragment',
		};

		return shaderityObj;
	}

	// TODO: implement shader code import feature (low priority)
	// public importShaderCode(code: string) {}

	private __createShaderCode(): string {
		// TODO: implement this function
		return '';
	}
}