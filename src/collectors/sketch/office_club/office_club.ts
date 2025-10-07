
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OfficeClubCollector extends SketchCollector {

    static CONFIG = {
        id: "office_club",
        name: "Office Club",
        description: "i18n.collectors.office_club.description",
        version: "0",
        website: "https://voyager.officeclub.com/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24485.jpg",
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
        entryUrl: "https://voyager.officeclub.com/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OfficeClubCollector.CONFIG);
    }
}
