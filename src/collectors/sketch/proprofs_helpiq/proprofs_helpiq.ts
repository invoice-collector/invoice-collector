
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ProprofsHelpiqCollector extends SketchCollector {

    static CONFIG = {
        id: "proprofs_helpiq",
        name: "ProProfs / HelpIQ",
        description: "i18n.collectors.proprofs_helpiq.description",
        version: "0",
        website: "https://www.proprofs.com/knowledgebase/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/30544.jpg",
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
        loginUrl: "https://www.proprofs.com/knowledgebase/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ProprofsHelpiqCollector.CONFIG);
    }
}
