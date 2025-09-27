
import { SketchCollector } from '../../sketchCollector';

export class BurlingtonHydroCollector extends SketchCollector {

    static CONFIG = {
        id: "burlington_hydro",
        name: "Burlington Hydro",
        description: "i18n.collectors.burlington_hydro.description",
        version: "0",
        website: "https://www.bhiviewmybill.com/login.asp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8657.jpg",
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
        entryUrl: "https://www.bhiviewmybill.com/login.asp",
    }

    constructor() {
        super(BurlingtonHydroCollector.CONFIG);
    }
}
