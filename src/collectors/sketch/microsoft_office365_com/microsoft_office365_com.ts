
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MicrosoftOffice365ComCollector extends SketchCollector {

    static CONFIG = {
        id: "microsoft_office365_com",
        name: "Microsoft Office365.com",
        description: "i18n.collectors.microsoft_office365_com.description",
        version: "0",
        website: "https://portal.office.com/adminportal/home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/391.jpg",
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
        entryUrl: "https://portal.office.com/adminportal/home",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MicrosoftOffice365ComCollector.CONFIG);
    }
}
