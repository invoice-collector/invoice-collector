import { SketchCollector } from '../../sketchCollector';

export class VivaquaCollector extends SketchCollector {

    static CONFIG = {
        id: "vivaqua",
        name: "Vivaqua",
        description: "i18n.collectors.vivaqua.description",
        version: "0",
        website: "https://vivaqua.be",
        logo: "https://cdn.prod.website-files.com/66054f355d6e88ac61cf705c/660bd7354556eae0a583004d_vivaqua-g.webp",
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
        }
    }

    constructor() {
        super(VivaquaCollector.CONFIG);
    }
}
