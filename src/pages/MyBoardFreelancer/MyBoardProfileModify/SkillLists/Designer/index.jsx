import * as S from '../../style';

import {
  DESIGN_DETAIL_ROLE_FRONT,
  DESIGN_DETAIL_ROLE_DB,
  DESIGN_DETAIL_SKILL_FRONT,
  DESIGN_DETAIL_SKILL_DB,
} from 'utils/constants/freelancerPosition/designer';

const Designer = ({
  DesignDetailRolesSTATE,
  DesignDetailSkillsSTATE,
  designEtcRole,
  setDesignEtcRole,
  designEtcSkill,
  setDesignEtcSkill,
  handleThreeJobField,
}) => {
  // Filter the database index for CSS(active)
  const DesignDetailRoleFilteredIndex = DesignDetailRolesSTATE.map((frontIndex) =>
    DESIGN_DETAIL_ROLE_DB.indexOf(frontIndex),
  );

  const DesignDetailSkillFilteredIndex = DesignDetailSkillsSTATE.map((frontIndex) =>
    DESIGN_DETAIL_SKILL_DB.indexOf(frontIndex),
  );

  return (
    <>
      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              역할 (3개까지만 선택 가능합니다.)
            </S.IntroStarLetters>
          </S.FlexColumn>
        </S.ContainerIntro>
      </S.FrameJobSkill>

      {/* ======= DesignDetailRolesSTATE LIST ======= */}
      <S.FrameLists>
        <S.FrameOptions>
          <S.ContainerOptions>
            {DESIGN_DETAIL_ROLE_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={DESIGN_DETAIL_ROLE_DB[index]}
                  // Compare front[index] with back[index]
                  active={DesignDetailRoleFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleThreeJobField(e, 'designerRole');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= 직접 입력 ======= */}
      <S.JobFieldInput
        type="text"
        placeholder="직접입력"
        value={designEtcRole || ''}
        onChange={(e) => setDesignEtcRole(e.target.value)}
      />

      {/* ======= DesignDetailRolesSTATE LIST ======= */}

      <S.FrameJobSkill>
        <S.ContainerIntro>
          <S.FlexColumn>
            <S.IntroStarLetters fullWidth="100" marginBottom="1">
              스킬 (3개까지만 선택 가능합니다.)
            </S.IntroStarLetters>
          </S.FlexColumn>
        </S.ContainerIntro>
      </S.FrameJobSkill>

      <S.FrameLists>
        <S.FrameOptions>
          <S.ContainerOptions>
            {DESIGN_DETAIL_SKILL_FRONT.map((type, index) => (
              <S.ContainerList key={type}>
                <S.ButtonLabel
                  id={index}
                  htmlFor={DESIGN_DETAIL_SKILL_DB[index]}
                  // Compare front[index] with back[index]
                  active={DesignDetailSkillFilteredIndex.includes(index)}
                  onClick={(e) => {
                    handleThreeJobField(e, 'designSkill');
                  }}
                >
                  {type}
                  <S.ButtonOption type="radio" value="2" name="career" />
                </S.ButtonLabel>
              </S.ContainerList>
            ))}
          </S.ContainerOptions>
        </S.FrameOptions>
      </S.FrameLists>

      {/* ======= 직접 입력 ======= */}
      <S.JobFieldInput
        type="text"
        placeholder="직접입력"
        value={designEtcSkill || ''}
        onChange={(e) => setDesignEtcSkill(e.target.value)}
      />
    </>
  );
};

export default Designer;
