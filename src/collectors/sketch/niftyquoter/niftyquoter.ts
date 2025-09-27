
import { SketchCollector } from '../../sketchCollector';

export class NiftyquoterCollector extends SketchCollector {

    static CONFIG = {
        id: "niftyquoter",
        name: "NiftyQuoter",
        description: "i18n.collectors.niftyquoter.description",
        version: "0",
        website: "https://www.niftyquoter.com/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17794.jpg",
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
        entryUrl: "https://www.niftyquoter.com/sign_in",
    }

    constructor() {
        super(NiftyquoterCollector.CONFIG);
    }
}
