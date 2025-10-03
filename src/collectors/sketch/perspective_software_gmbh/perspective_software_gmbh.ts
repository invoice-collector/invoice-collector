
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PerspectiveSoftwareGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "perspective_software_gmbh",
        name: "Perspective Software GmbH",
        description: "i18n.collectors.perspective_software_gmbh.description",
        version: "0",
        website: "https://app.perspective.co/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1612032.jpg",
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
        entryUrl: "https://app.perspective.co/settings",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PerspectiveSoftwareGmbhCollector.CONFIG);
    }
}
