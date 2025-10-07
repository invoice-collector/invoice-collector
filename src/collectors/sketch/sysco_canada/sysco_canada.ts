
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SyscoCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "sysco_canada",
        name: "Sysco Canada",
        description: "i18n.collectors.sysco_canada.description",
        version: "0",
        website: "https://syscosource.ca/pnet/eOrder",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/812409.jpg",
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
        entryUrl: "https://syscosource.ca/pnet/eOrder",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SyscoCanadaCollector.CONFIG);
    }
}
