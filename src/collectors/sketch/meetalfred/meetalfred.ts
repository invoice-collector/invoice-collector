
import { SketchCollector } from '../../sketchCollector';

export class MeetalfredCollector extends SketchCollector {

    static CONFIG = {
        id: "meetalfred",
        name: "MeetAlfred",
        description: "i18n.collectors.meetalfred.description",
        version: "0",
        website: "https://meetalfred.com/app/billing?team=14143",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778132.jpg",
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
        entryUrl: "https://meetalfred.com/app/billing?team=14143",
    }

    constructor() {
        super(MeetalfredCollector.CONFIG);
    }
}
