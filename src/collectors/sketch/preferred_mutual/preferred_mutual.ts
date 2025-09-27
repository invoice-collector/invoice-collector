
import { SketchCollector } from '../../sketchCollector';

export class PreferredMutualCollector extends SketchCollector {

    static CONFIG = {
        id: "preferred_mutual",
        name: "Preferred Mutual",
        description: "i18n.collectors.preferred_mutual.description",
        version: "0",
        website: "https://my.preferredmutual.com/Identity/account/logon?ReturnUrl=%2fIdentity%2fusers%2fissue.aspx%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fmy.preferredmutual.com%252finsured%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252fInsured%25252",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385193.jpg",
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
        entryUrl: "https://my.preferredmutual.com/Identity/account/logon?ReturnUrl=%2fIdentity%2fusers%2fissue.aspx%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fmy.preferredmutual.com%252finsured%252f%26wctx%3drm%253d0%2526id%253dpassive%2526ru%253d%25252fInsured%25252",
    }

    constructor() {
        super(PreferredMutualCollector.CONFIG);
    }
}
