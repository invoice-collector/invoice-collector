
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MitsubishiMdlCollector extends SketchCollector {

    static CONFIG = {
        id: "mitsubishi_mdl",
        name: "Mitsubishi - MDL",
        description: "i18n.collectors.mitsubishi_mdl.description",
        version: "0",
        website: "https://mdl.login.mmsa.com/am/XUI/?realm=/alpha&goto=http%3A%2F%2Fmdl.mmsa.com%2F%3F_ig%3Dtrue#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4590400.jpg",
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
        entryUrl: "https://mdl.login.mmsa.com/am/XUI/?realm=/alpha&goto=http%3A%2F%2Fmdl.mmsa.com%2F%3F_ig%3Dtrue#/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MitsubishiMdlCollector.CONFIG);
    }
}
