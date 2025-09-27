import { SketchCollector } from '../../sketchCollector';

export class TemuCollector extends SketchCollector {

    static CONFIG = {
        id: "temu",
        name: "Temu",
        description: "i18n.collectors.temu.description",
        version: "0",
        website: "https://temu.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/a/a6/Temu_logo.svg",
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
        entryUrl: "https://www.temu.com/",
    }

    constructor() {
        super(TemuCollector.CONFIG);
    }
}
