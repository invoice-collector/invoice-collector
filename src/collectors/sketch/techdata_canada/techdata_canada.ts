
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TechdataCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "techdata_canada",
        name: "TechData Canada",
        description: "i18n.collectors.techdata_canada.description",
        version: "0",
        website: "https://techdata.highradius.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1301956.jpg",
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
        entryUrl: "https://techdata.highradius.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TechdataCanadaCollector.CONFIG);
    }
}
