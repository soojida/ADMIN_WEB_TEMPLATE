// 공통
import { useCallback } from "react";

// 컴포넌트
import { InputImages } from "@/components/atoms/form/Input";

interface UseImageProps {
  handlers?: {
    onChange?: (file: File) => void;
  };
  images: InputImages[];
  setImages: React.Dispatch<React.SetStateAction<InputImages[]>>;
}

export const useImage = ({ handlers, images, setImages }: UseImageProps) => {
  /**
   * @param id input + label 연동 htmlForId
   * @param e 선택한 파일
   * @returns 타입이 파일인 경우 파일 선택 및 변경 로직 입니다.
   */
  const handleChangeFile = ({ id, e }: { id: string; e: any }) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const selectedFile = files[0];
    if (handlers?.onChange) {
      handlers.onChange(selectedFile);
    }
    e.target.value = "";
  };

  /**
   * @param e 선택한 이미지 파일
   * @return 타입이 이미지인 경우 이미지 파일 선택 및 변경 로직 입니다.
   */
  const handleChangeImage = (e: any) => {
    // 선택한 파일을 배열로 변환
    const selectedFiles = Array.from(e.target.files);

    // 허용된 확장자
    const allowFormat = ["jpg", "jpeg", "png"];

    // 중복 파일명이 있는 경우 필터링
    const newFiles = selectedFiles
      .filter((file: any) => {
        const fileExtension = file.name.split(".").pop(); // 확장자 추출
        return (
          allowFormat.includes(fileExtension) &&
          !images.some((existingFile: any) => existingFile.name === file.name)
        );
      })
      .map((file: any) => ({
        name: file.name, // 초기 파일명
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file) // 이미지 파일이면, URL.createObjectURL(file)을 이용해 미리보기 URL 제공
          : null, // 이미지가 아니면, 미리보기 null
        file,
      }));

    // 기존 파일 유지 + 새 파일 추가
    setImages((prev) => [...prev, ...newFiles]);

    if (handlers?.onChange) handlers.onChange(e);
  };

  /**
   * @param index 선택한 이미지 파일
   * @returns 선택한 이미지 파일 제거 로직 입니다.
   */
  const handleRemoveImage = useCallback((index: number) => {
    setImages((prev) => prev.filter((_, el) => el !== index));
  }, []);
  return {
    handleChangeFile,
    handleChangeImage,
    handleRemoveImage,
  };
};
