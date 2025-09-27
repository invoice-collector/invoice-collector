
import { SketchCollector } from '../../sketchCollector';

export class AmazonVideoDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_video_direct",
        name: "Amazon Video Direct",
        description: "i18n.collectors.amazon_video_direct.description",
        version: "0",
        website: "https://www.amazon.com/ap/signin?clientContext=135-5131242-6373120&openid.return_to=https%3A%2F%2Fvideodirect.amazon.com%2Fap-post-redirect&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dv_cooper_u",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/162053.jpg",
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
        entryUrl: "https://www.amazon.com/ap/signin?clientContext=135-5131242-6373120&openid.return_to=https%3A%2F%2Fvideodirect.amazon.com%2Fap-post-redirect&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_dv_cooper_u",
    }

    constructor() {
        super(AmazonVideoDirectCollector.CONFIG);
    }
}
