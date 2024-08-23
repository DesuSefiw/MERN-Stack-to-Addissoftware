import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs, setGenreFilter } from "../features/Song/SongSlice";
import { Song } from "../types/types";
import { RootState } from "../app/store";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaSpinner } from "react-icons/fa6";
import Modal from "./Modal/Modal";
import UpdateSong from "./UpdateSong";
import DeleteSong from "./DeleteSong";
import { toast } from 'react-toastify';
import { Flex, Text, Box } from "rebass";
import Layout from "./common/Layout";
import {
  ResponsiveFlex,
  SongImage,
  ButtonContainer,
  Button,
  Pagination,
  StyledActiveButton
} from "../assets/style/ListSongsStyle";
import backimage from '../assets/mp.jpg'

const ListSongs: React.FC = () => {
  const dispatch = useDispatch();

  const { songs, genreFilter, isLoading, error } = useSelector(
    (state: RootState) => state.songs
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const songsPerPage = 5;

  const handleOpenModal = (component: React.ReactNode) => {
    setModalContent(component);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch, genreFilter]);

  if (error) {
    toast.error(error);
  }

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Normalize and filter songs by genre
  const normalizeString = (str: string) =>
    str
      .trim()
      .toLowerCase()
      .replace(/\s+/g, " ") // Normalize spaces
      .replace(/-/g, "-"); // Normalize hyphens

  const filteredSongs = genreFilter
    ? songs.filter(
        (song) => normalizeString(song.genre) === normalizeString(genreFilter)
      )
    : songs;

  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = filteredSongs.slice(indexOfFirstSong, indexOfLastSong);
  const totalPages = Math.ceil(filteredSongs.length / songsPerPage);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
    setCurrentPage(1);
  };

  return (
    <Layout>
      <ResponsiveFlex>
        <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text width={"25%"} fontWeight={"bold"}>
            Song Title
          </Text>
          <Text width={"25%"} fontWeight={"bold"}>
            Album
          </Text>
          <Text fontWeight={"bold"}>Genre</Text>
          <Text fontWeight={"bold"}>Actions</Text>
        </Flex>
        <hr
          style={{
            width: "100%",
            borderColor: "black",
            borderWidth: "2px",
            marginBottom: "1rem",
            backgroundImage: "url('../assets/musc.jpg')",
          }}
        />
        {/* Genre Filter Dropdown */}
        <select style={{height:25}} onChange={handleGenreChange} value={genreFilter}>
          <option value="">All Genres</option>
          <option value="Rock">Rock</option>
          <option value="Pop">Pop</option>
          <option value="Ethio-Jazz">Ethio-Jazz</option>
          <option value="Soul">Soul</option>
          <option value="Rap">Rap</option>
          <option value="Fusion">Ethiopian Fusion</option>
          <option value="Instrumental">Instrumental</option>
          <option value="Traditional">Traditional</option>
         

          {/* Add more genres as needed */}
        </select>
  
        {isLoading ? (
          <Text
            fontWeight="bold"
            textAlign={"center"}
            fontSize={"1.5rem"}
            marginY={"10%"}
          >
            <FaSpinner />
            Loading...wait a few seconds
          </Text>
        ) : (
          currentSongs.map((song: Song, index: number) => {
            return (
              <>
                <Flex
                  key={song._id}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Flex alignItems={"center"} width={"15%"}>
                    <SongImage src={backimage} />
                    <Box>
                      <h3>{song.title}</h3>
                      <p>By: {song.artist}</p>
                    </Box>
                  </Flex>
                  <Text width={"25%"}>{song.album}</Text>
                  <Text textAlign={"center"}>{song.genre}</Text>
                  <ButtonContainer>
                    <Button
                      onClick={() =>
                        handleOpenModal(
                          <UpdateSong
                            onClose={handleCloseModal}
                            id={song._id}
                          />
                        )
                      }
                    >
                      <CiEdit />
                    </Button>
                    <Button
                      onClick={() =>
                        handleOpenModal(
                          <DeleteSong
                            onClose={handleCloseModal}
                            id={song._id}
                          />
                        )
                      }
                    >
                      <MdOutlineDeleteOutline />
                    </Button>
                  </ButtonContainer>
                </Flex>
                {index !== filteredSongs.length - 1 && (
                  <hr
                    style={{
                      width: "100%",
                      borderColor: "black",
                      marginBottom: "1rem",
                    }}
                  />
                )}
              </>
            );
          })
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          component={modalContent}
        />
      </ResponsiveFlex>
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;
          return pageNumber === currentPage ? (
            <StyledActiveButton key={index} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </StyledActiveButton>
          ) : (
            <Button key={index} onClick={() => handlePageChange(pageNumber)}>
              {pageNumber}
            </Button>
          );
        })}
      </Pagination>
    </Layout>
  );
};

export default ListSongs;
