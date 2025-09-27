
import { SketchCollector } from '../../sketchCollector';

export class FnacCollector extends SketchCollector {

    static CONFIG = {
        id: "fnac",
        name: "Fnac",
        description: "i18n.collectors.fnac.description",
        version: "0",
        website: "https://secure.fnac.com/identity/gateway/signin?logonType=StandardCreation&pageRedir=https%3a%2f%2fsecure.fnac.com%2faccount%2fensure-authenticated%3fpagePar%26pageRedir%3dhttps%253a%252f%252fwww.fnac.com%252f&section=signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27346.jpg",
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
        entryUrl: "https://secure.fnac.com/identity/gateway/signin?logonType=StandardCreation&pageRedir=https%3a%2f%2fsecure.fnac.com%2faccount%2fensure-authenticated%3fpagePar%26pageRedir%3dhttps%253a%252f%252fwww.fnac.com%252f&section=signin",
    }

    constructor() {
        super(FnacCollector.CONFIG);
    }
}
