
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeepinfraCollector extends SketchCollector {

    static CONFIG = {
        id: "deepinfra",
        name: "Deepinfra",
        description: "i18n.collectors.deepinfra.description",
        version: "0",
        website: "https://deepinfra.com",
        logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/1.70.0/files/light/deepinfra-color.png",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://deepinfra.com/login?from=%2Fdash",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeepinfraCollector.CONFIG);
    }
}
