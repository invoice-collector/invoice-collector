
import { SketchCollector } from '../../sketchCollector';

export class ClickmeetingCollector extends SketchCollector {

    static CONFIG = {
        id: "clickmeeting",
        name: "ClickMeeting",
        description: "i18n.collectors.clickmeeting.description",
        version: "0",
        website: "https://account-panel.clickmeeting.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24116.jpg",
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
        entryUrl: "https://account-panel.clickmeeting.com/",
    }

    constructor() {
        super(ClickmeetingCollector.CONFIG);
    }
}
