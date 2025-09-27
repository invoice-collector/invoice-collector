
import { SketchCollector } from '../../sketchCollector';

export class JsmdGroupCollector extends SketchCollector {

    static CONFIG = {
        id: "jsmd_group",
        name: "JSMD Group",
        description: "i18n.collectors.jsmd_group.description",
        version: "0",
        website: "https://jep.jsmd-group.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2158888.jpg",
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
        entryUrl: "https://jep.jsmd-group.com/login",
    }

    constructor() {
        super(JsmdGroupCollector.CONFIG);
    }
}
