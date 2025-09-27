
import { SketchCollector } from '../../sketchCollector';

export class WaalazyCollector extends SketchCollector {

    static CONFIG = {
        id: "waalazy",
        name: "Waalazy",
        description: "i18n.collectors.waalazy.description",
        version: "0",
        website: "https://invoice.stripe.com/i/acct_1FOmpmHBSdnTEMdF/live_YWNjdF8xRk9tcG1IQlNkblRFTWRGLF9PN3hZbFJMMHFkb0VFeHk1NzNFSW9nSEtYemgwcWUxLDc4MDYwMzgw02007CedNKg4?s=ap",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2001398.jpg",
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
        entryUrl: "https://invoice.stripe.com/i/acct_1FOmpmHBSdnTEMdF/live_YWNjdF8xRk9tcG1IQlNkblRFTWRGLF9PN3hZbFJMMHFkb0VFeHk1NzNFSW9nSEtYemgwcWUxLDc4MDYwMzgw02007CedNKg4?s=ap",
    }

    constructor() {
        super(WaalazyCollector.CONFIG);
    }
}
