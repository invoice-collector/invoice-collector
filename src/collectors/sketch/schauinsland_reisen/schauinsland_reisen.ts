
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchauinslandReisenCollector extends SketchCollector {

    static CONFIG = {
        id: "schauinsland_reisen",
        name: "schauinsland-reisen",
        description: "i18n.collectors.schauinsland_reisen.description",
        version: "0",
        website: "https://www.slr-info.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65602.jpg",
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
        entryUrl: "https://www.slr-info.de/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchauinslandReisenCollector.CONFIG);
    }
}
