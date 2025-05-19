import "../css/Knowledge.css";
import {
  getKnowledgeSectionList,
  type KnowledgeSectionDto,
  type KnowledGeDto,
} from "../apis/Knowledge";

export function Knowledge() {
  const knowledgeList: KnowledgeSectionDto[] = getKnowledgeSectionList();

  if (!knowledgeList) {
    return null;
  }

  const KnowledgeSectionList = knowledgeList.map(
    (section: KnowledgeSectionDto) => {
      return (
        <>
          <div className="knowledge-section">
            <h3 className="knowledge-subtitle">{section.title}</h3>
            <ul className="knowledge-list">
              {section.KnowledGeList.map((knowledge: KnowledGeDto) => {
                return (
                  <>
                    <li className="knowledge-item">
                      <a
                        href={knowledge.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="knowledge-link"
                      >
                        <img
                          src={knowledge.icon}
                          alt={knowledge.name}
                          className="knowledge-icon"
                        />
                        <span className="knowledge-tooltip">
                          {knowledge.name}
                        </span>
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </>
      );
    }
  );

  return (
    <>
      <section id="knowledge" className="section">
        <h2 className="section-title">Knowledge</h2>
        {KnowledgeSectionList}
      </section>
      <section />
    </>
  );
}
