
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlignTechnologySwitzerlandGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "align_technology_switzerland_gmbh",
        name: "Align Technology Switzerland GmbH",
        description: "i18n.collectors.align_technology_switzerland_gmbh.description",
        version: "0",
        website: "https://my.invisalign.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1061765.jpg",
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
        entryUrl: "https://my.invisalign.de/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlignTechnologySwitzerlandGmbhCollector.CONFIG);
    }
}
