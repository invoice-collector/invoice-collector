
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NotionCollector extends SketchCollector {

    static CONFIG = {
        id: "notion",
        name: "Notion",
        description: "i18n.collectors.notion.description",
        version: "0",
        website: "https://www.notion.so/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/68981.jpg",
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
        loginUrl: "https://www.notion.so/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(NotionCollector.CONFIG);
    }
}
