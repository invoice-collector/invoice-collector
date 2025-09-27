
import { SketchCollector } from '../../sketchCollector';

export class MutuelleIndustriePetroleCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_industrie_petrole",
        name: "Mutuelle Industrie Petrole",
        description: "i18n.collectors.mutuelle_industrie_petrole.description",
        version: "0",
        website: "https://secure.mutuelles.biz/-MIP-",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129073.jpg",
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
        entryUrl: "https://secure.mutuelles.biz/-MIP-",
    }

    constructor() {
        super(MutuelleIndustriePetroleCollector.CONFIG);
    }
}
