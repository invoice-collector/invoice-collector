
import { SketchCollector } from '../../sketchCollector';

export class BitbucketCollector extends SketchCollector {

    static CONFIG = {
        id: "bitbucket",
        name: "Bitbucket",
        description: "i18n.collectors.bitbucket.description",
        version: "0",
        website: "https://my.atlassian.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116108.jpg",
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
        entryUrl: "https://my.atlassian.com/billing",
    }

    constructor() {
        super(BitbucketCollector.CONFIG);
    }
}
