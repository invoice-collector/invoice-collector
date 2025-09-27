
import { SketchCollector } from '../../sketchCollector';

export class MesCoursesCasinoCollector extends SketchCollector {

    static CONFIG = {
        id: "mes_courses_casino",
        name: "Mes Courses Casino",
        description: "i18n.collectors.mes_courses_casino.description",
        version: "0",
        website: "http://www.mescoursescasino.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27328.jpg",
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
        entryUrl: "http://www.mescoursescasino.fr",
    }

    constructor() {
        super(MesCoursesCasinoCollector.CONFIG);
    }
}
