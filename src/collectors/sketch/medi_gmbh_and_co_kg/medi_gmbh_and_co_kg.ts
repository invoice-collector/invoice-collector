
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MediGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "medi_gmbh_and_co_kg",
        name: "Medi GmbH & Co. KG",
        description: "i18n.collectors.medi_gmbh_and_co_kg.description",
        version: "0",
        website: "https://id.medi.de/login?state=g6Fo2SBpb0VBdms0Q3dNR25USUcwajV1cEZCNjNZNGZrTlJ1RKN0aWTZIC1neGJpWnpFd0NhRm9LSmhuYWFOOHZTNC1ybWd4TEZLo2NpZNkgekRaMklNbXYxN292NmVscmUwMlhFdzF0V21Sb01KMTc&client=zDZ2IMmv17ov6elre02XEw1tWmRoMJ17&protocol=oauth2&scope=openid%20p",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428742.jpg",
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
        loginUrl: "https://id.medi.de/login?state=g6Fo2SBpb0VBdms0Q3dNR25USUcwajV1cEZCNjNZNGZrTlJ1RKN0aWTZIC1neGJpWnpFd0NhRm9LSmhuYWFOOHZTNC1ybWd4TEZLo2NpZNkgekRaMklNbXYxN292NmVscmUwMlhFdzF0V21Sb01KMTc&client=zDZ2IMmv17ov6elre02XEw1tWmRoMJ17&protocol=oauth2&scope=openid%20p",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MediGmbhAndCoKgCollector.CONFIG);
    }
}
