
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LicenseDistributionCollector extends SketchCollector {

    static CONFIG = {
        id: "license_distribution",
        name: "License Distribution",
        description: "i18n.collectors.license_distribution.description",
        version: "0",
        website: "http://www.license-distribution.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102804.jpg",
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
        entryUrl: "http://www.license-distribution.de",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LicenseDistributionCollector.CONFIG);
    }
}
