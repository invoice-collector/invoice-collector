
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HewoInternetmarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "hewo_internetmarketing",
        name: "HEWO Internetmarketing",
        description: "i18n.collectors.hewo_internetmarketing.description",
        version: "0",
        website: "https://hewo.clonedesk.com/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/386.jpg",
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
        entryUrl: "https://hewo.clonedesk.com/index.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HewoInternetmarketingCollector.CONFIG);
    }
}
