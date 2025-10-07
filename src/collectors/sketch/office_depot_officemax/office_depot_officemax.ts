
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class OfficeDepotOfficemaxCollector extends SketchCollector {

    static CONFIG = {
        id: "office_depot_officemax",
        name: "Office Depot OfficeMax",
        description: "i18n.collectors.office_depot_officemax.description",
        version: "0",
        website: "https://www.officedepot.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747828.jpg",
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
        entryUrl: "https://www.officedepot.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OfficeDepotOfficemaxCollector.CONFIG);
    }
}
