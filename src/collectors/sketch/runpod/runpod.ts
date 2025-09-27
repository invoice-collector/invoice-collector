
import { SketchCollector } from '../../sketchCollector';

export class RunpodCollector extends SketchCollector {

    static CONFIG = {
        id: "runpod",
        name: "RunPod",
        description: "i18n.collectors.runpod.description",
        version: "0",
        website: "https://console.runpod.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2148260.jpg",
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
        entryUrl: "https://console.runpod.io/login",
    }

    constructor() {
        super(RunpodCollector.CONFIG);
    }
}
